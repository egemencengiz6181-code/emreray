import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CtaBand, LinkArrow, PageHero, SectionHead } from "../components/Blocks";
import { ArrowRight } from "../components/Icons";
import { Parallax, Reveal } from "../components/Motion";
import { ProjectCard, ProjectModal } from "../components/ProjectCard";
import type { Project } from "../data/types";
import { useContent } from "../i18n/content";
import { resolveId } from "../i18n/routes";
import { useI18n } from "../i18n/useLang";
import { useTitle } from "../lib/useTitle";
import NotFound from "./NotFound";

function splitTitle(t: string) {
  const w = t.split(" ");
  if (w.length < 3) return [t];
  const mid = Math.ceil(w.length / 2);
  return [w.slice(0, mid).join(" "), w.slice(mid).join(" ")];
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const { t, L, lang } = useI18n();
  const { services, completed } = useContent();
  const id = resolveId.service(lang, slug);
  const s = services.find((x) => x.slug === id);
  const [active, setActive] = useState<Project | null>(null);
  useTitle(s?.title, s?.lead);
  if (!s) return <NotFound />;

  const idx = services.indexOf(s);
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  const related = completed.filter((p) => p.service === s.slug);
  const shown = related.slice(0, 6);

  return (
    <>
      <PageHero
        key={s.slug}
        eyebrow={`${s.no} — ${s.tagline}`}
        title={splitTitle(s.title)}
        image={s.hero}
        crumbs={[{ label: t.nav.services, to: L.services() }, { label: s.title }]}
      />

      <section className="section">
        <div className="container">
          <div className="svc-intro">
            <Reveal>
              <p className="svc-intro__lead">{s.lead}</p>
            </Reveal>
            <div className="svc-intro__body">
              {s.body.map((b, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{b}</p>
                </Reveal>
              ))}
              <Reveal delay={0.2}>
                <div style={{ marginTop: 12 }}>
                  <Link to={L.contact()} className="btn">
                    {t.common.contactUs} <ArrowRight size={18} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <ul className="scope">
            {s.scope.map((item, i) => (
              <Reveal as="li" key={item} delay={(i % 3) * 0.06} y={16}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                {item}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="split-band">
        <div className="split-band__media">
          <Parallax amount={50}>
            <img src={s.gallery[0]} alt="" loading="lazy" />
          </Parallax>
        </div>
        <div className="split-band__text">
          <span className="eyebrow">{t.common.since}</span>
          <h2>
            {s.highlight.title} <span>{s.highlight.text}</span>
          </h2>
          <div>
            <LinkArrow to={L.about()} light>
              {t.common.aboutUs}
            </LinkArrow>
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="gallery">
            {[s.hero, ...s.gallery.slice(1)].map((g, i) => (
              <Reveal key={g} delay={i * 0.06} y={24}>
                <figure>
                  <img src={g} alt="" loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {shown.length > 0 && (
        <section className="section section--mist">
          <div className="container">
            <SectionHead
              eyebrow={t.services.refEyebrow}
              title={t.services.refTitle(s.short)}
              action={<LinkArrow to={L.projects({ area: s.slug })}>{`${t.common.all} (${related.length})`}</LinkArrow>}
            />
            <div className="project-grid">
              {shown.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08} y={30}>
                  <ProjectCard p={p} onOpen={setActive} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
          <ProjectModal project={active} list={shown} onClose={() => setActive(null)} onChange={setActive} />
        </section>
      )}

      <section className="container">
        <nav className="svc-nav" aria-label={t.services.otherAreas}>
          <Link to={L.service(prev.slug)}>
            <span>{t.services.prevArea}</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={L.service(next.slug)}>
            <span>{t.services.nextArea}</span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </section>

      <CtaBand image={s.gallery[1]} />
    </>
  );
}
