import { useState } from "react";
import { PageHero } from "../components/Blocks";
import { useConsent } from "../components/Consent";
import { Reveal } from "../components/Motion";
import { useI18n } from "../i18n/useLang";
import { useTitle } from "../lib/useTitle";

export default function CookiePolicy() {
  const { t } = useI18n();
  const { set } = useConsent();
  const [done, setDone] = useState(false);
  const c = t.cookiePage;
  useTitle(t.cookie.policy);

  return (
    <>
      <PageHero
        eyebrow={t.cookie.policy}
        title={c.title}
        image="/media/2024-12-dscn4806-scaled.webp"
        crumbs={[{ label: t.cookie.policy }]}
        short
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <div className="prose">
              {c.blocks.map((b) => (
                <div key={b.h}>
                  <h2>{b.h}</h2>
                  <p>{b.p}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 48, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <button
                className="btn"
                onClick={() => {
                  set(null);
                  setDone(true);
                }}
              >
                {c.reset}
              </button>
              {done && (
                <span className="muted" role="status">
                  {c.resetDone}
                </span>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
