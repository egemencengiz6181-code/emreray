import { CtaBand, LinkArrow, PageHero, SectionHead } from "../components/Blocks";
import { Counter, LineReveal, Parallax, Reveal } from "../components/Motion";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { useTitle } from "../lib/useTitle";
import { Certs } from "./Home";

/** Metinler Çevre ve İSG Politikası (POL-001), Kalite Politikası (POL-002) ve elektrifikasyon yazısından derlendi. */
export default function Sustainability() {
  const { t, L } = useI18n();
  const { certifications } = useContent();
  const s = t.sustain;
  useTitle(t.nav.sustainability, s.lead);

  return (
    <>
      <PageHero
        eyebrow={t.nav.sustainability}
        title={s.title}
        lead={s.lead}
        image="/media/2025-01-hes-nedir-1024x684-1.webp"
        crumbs={[{ label: t.nav.corporate, to: L.about() }, { label: t.nav.sustainability }]}
      />

      <section className="section">
        <div className="container svc-intro">
          <div>
            <Reveal y={16}>
              <span className="eyebrow">{s.introEyebrow}</span>
            </Reveal>
            <h2 className="h2" style={{ marginTop: 20 }}>
              <LineReveal lines={s.introTitle} />
            </h2>
          </div>
          <div className="svc-intro__body">
            <Reveal>
              <p className="svc-intro__lead" style={{ fontSize: "clamp(22px, 2vw, 30px)" }}>
                {s.intro}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <LinkArrow to={L.policy("cevre-ve-isg-politikasi")}>{s.readPolicy}</LinkArrow>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHead eyebrow={s.pillarsEyebrow} title={s.pillarsTitle} />
          <div className="pillars">
            {s.pillars.map((p, i) => (
              <Reveal key={p.title} className="pillar" delay={i * 0.08}>
                <span className="num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <ul>
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="split-band">
        <div className="split-band__media">
          <Parallax amount={50}>
            <img src="/media/2025-02-wa-2025-01-27-at-17-15-09-2.webp" alt="" loading="lazy" />
          </Parallax>
        </div>
        <div className="split-band__text">
          <span className="eyebrow">{s.impactEyebrow}</span>
          <div className="big-km">
            <b className="num">
              <Counter to={2679 + 811} />
            </b>
            <span>km</span>
          </div>
          <p>{s.kmLabel}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow={s.impactEyebrow}
            title={s.impactTitle}
            action={<LinkArrow to={L.post("elektrifikasyonun-demiryolu-tasimaciligina-etkisi")}>{s.readArticle}</LinkArrow>}
          />
          <div className="impact">
            {s.impact.map((it, i) => (
              <Reveal key={it.title} className="impact__item" delay={i * 0.08}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container quality">
          <div>
            <Reveal y={16}>
              <span className="eyebrow">{t.about.certsEyebrow}</span>
            </Reveal>
            <h2 className="h2" style={{ marginTop: 20 }}>
              <LineReveal lines={t.about.certsTitle} />
            </h2>
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: 24 }}>
                {t.about.certsText}
              </p>
            </Reveal>
          </div>
          <Certs items={certifications} flush />
        </div>
      </section>

      <CtaBand image="/media/2025-04-wa-2025-04-11-at-11-40-12.webp" />
    </>
  );
}
