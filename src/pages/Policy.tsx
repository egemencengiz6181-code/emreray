import { Link, useParams } from "react-router-dom";
import { PageHero } from "../components/Blocks";
import { ArrowRight } from "../components/Icons";
import { Reveal } from "../components/Motion";
import { useContent } from "../i18n/content";
import { resolveId } from "../i18n/routes";
import { useI18n } from "../i18n/useLang";
import { useTitle } from "../lib/useTitle";
import NotFound from "./NotFound";

export default function PolicyPage() {
  const { slug } = useParams();
  const { t, L, lang } = useI18n();
  const { policies } = useContent();
  const p = policies.find((x) => x.slug === resolveId.policy(lang, slug));
  useTitle(p ? `${p.code} ${p.title}` : undefined);
  if (!p) return <NotFound />;

  const words = p.title.split(" ");
  const title = words.length > 2 ? [words.slice(0, 2).join(" "), words.slice(2).join(" ")] : [p.title];

  return (
    <>
      <PageHero
        key={p.slug}
        eyebrow={`${t.policy.eyebrow} · ${p.code}`}
        title={title}
        image={p.slug === "kalite-politikasi" ? "/media/2025-01-ekb-sinyalizasyon-calismalari-4-2.webp" : "/media/2025-01-hes-nedir-1024x684-1.webp"}
        crumbs={[{ label: t.nav.corporate, to: L.about() }, { label: p.title }]}
        short
      />
      <section className="section">
        <div className="container policy">
          <aside className="policy__aside" aria-label={t.policy.list}>
            {policies.map((x) => (
              <Link key={x.slug} to={L.policy(x.slug)} className={x.slug === p.slug ? "is-active" : ""}>
                <span>
                  <small className="num">{x.code}</small>
                  {x.title}
                </span>
                <ArrowRight size={16} />
              </Link>
            ))}
            <Link to={L.sustainability()}>
              <span>{t.nav.sustainability}</span>
              <ArrowRight size={16} />
            </Link>
          </aside>
          <Reveal>
            <article>
              <span className="eyebrow">{p.code}</span>
              <h2 className="h2" style={{ marginTop: 16 }}>
                {p.title}
              </h2>
              {p.intro && (
                <p className="lead" style={{ marginTop: 24 }}>
                  {p.intro}
                </p>
              )}
              <ol className="policy__list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ol>
              {p.closing && <p className="policy__closing">{p.closing}</p>}
              <div className="signature">
                <span>{p.signature}</span>
                <span className="num">{p.date}</span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
