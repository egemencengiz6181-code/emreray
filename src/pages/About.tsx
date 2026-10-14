import { CtaBand, LinkArrow, PageHero, SectionHead } from "../components/Blocks";
import { Counter, LineReveal, Parallax, Reveal } from "../components/Motion";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { useTitle } from "../lib/useTitle";
import { Certs } from "./Home";

export default function About() {
  const { t, L } = useI18n();
  const { company, values, certifications } = useContent();
  const a = t.about;
  useTitle(t.nav.about, company.summary);

  return (
    <>
      <PageHero
        eyebrow={t.nav.corporate}
        title={a.title}
        lead={company.summary}
        image="/media/2024-12-20131106-123823-scaled.webp"
        crumbs={[{ label: t.nav.corporate }]}
      />

      <section className="section">
        <div className="container svc-intro">
          <div>
            <Reveal y={16}>
              <span className="eyebrow">{a.sinceEyebrow}</span>
            </Reveal>
            <h2 className="h2" style={{ marginTop: 20 }}>
              <LineReveal lines={a.sinceTitle} />
            </h2>
          </div>
          <div className="svc-intro__body">
            {[a.p1, a.p2, a.p3].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="split-band">
        <div className="split-band__media">
          <Parallax amount={50}>
            <img src="/media/2024-12-dscn4817-scaled.webp" alt={a.visionAlt} loading="lazy" />
          </Parallax>
        </div>
        <div className="split-band__text">
          <span className="eyebrow">{a.visionEyebrow}</span>
          <h2>
            {a.visionQuote[0]}
            <span>{a.visionQuote[1]}</span>
            {a.visionQuote[2]}
          </h2>
          <p>{a.visionText}</p>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHead eyebrow={a.valuesEyebrow} title={a.valuesTitle} lead={a.valuesLead} />
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 0.08}>
                <span className="num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow={a.milestonesEyebrow} title={a.milestonesTitle} />
          <div className="timeline">
            {a.milestones.map((m, i) => (
              <Reveal key={m.year} className="milestone" delay={i * 0.1}>
                <b className="num">
                  <Counter to={m.year} format={false} duration={1.6} />
                </b>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container quality">
          <div>
            <Reveal y={16}>
              <span className="eyebrow">{a.certsEyebrow}</span>
            </Reveal>
            <h2 className="h2" style={{ marginTop: 20 }}>
              <LineReveal lines={a.certsTitle} />
            </h2>
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginTop: 24 }}>
                {a.certsText}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ marginTop: 36, display: "flex", gap: 32, flexWrap: "wrap" }}>
                <LinkArrow to={L.policy("kalite-politikasi")}>{t.nav.quality}</LinkArrow>
                <LinkArrow to={L.policy("cevre-ve-isg-politikasi")}>{t.nav.ohs}</LinkArrow>
              </div>
            </Reveal>
          </div>
          <Certs items={certifications} flush />
        </div>
      </section>

      <CtaBand image="/media/2025-01-dscn3885-scaled.webp" title={a.ctaTitle} text={a.ctaText} />
    </>
  );
}
