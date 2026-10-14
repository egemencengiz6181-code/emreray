import { Link } from "react-router-dom";
import { CtaBand, PageHero } from "../components/Blocks";
import { AreaIcon, ArrowRight } from "../components/Icons";
import { Reveal } from "../components/Motion";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { thumb } from "../lib/format";
import { useTitle } from "../lib/useTitle";

export default function Services() {
  const { t, L } = useI18n();
  const { services, completed } = useContent();
  useTitle(t.nav.services, t.services.lead);
  return (
    <>
      <PageHero
        eyebrow={t.nav.services}
        title={t.services.title}
        lead={t.services.lead}
        image="/media/2025-02-wa-2025-01-27-at-17-15-09-6.webp"
        crumbs={[{ label: t.nav.services }]}
      />
      <section className="section">
        <div className="container">
          <div className="areas">
            {services.map((s, i) => {
              const count = completed.filter((p) => p.service === s.slug).length;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.08} y={30}>
                  <Link to={L.service(s.slug)} className="area">
                    <div className="area__img">
                      <img src={thumb(s.hero)} alt="" loading="lazy" decoding="async" />
                    </div>
                    <div className="area__top">
                      <span className="area__icon">
                        <AreaIcon name={s.slug} />
                      </span>
                      <span className="area__no num">{s.no}</span>
                    </div>
                    <div className="area__body">
                      <h2 className="area__title">{s.title}</h2>
                      <p className="area__sub">{s.lead}</p>
                      <div className="area__foot">
                        <span>{t.services.completedCount(count)}</span>
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
