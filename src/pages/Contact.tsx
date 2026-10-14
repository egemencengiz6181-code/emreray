import { useState, type FormEvent, type ReactElement } from "react";
import { PageHero } from "../components/Blocks";
import { ConsentFrame } from "../components/Consent";
import { ArrowRight } from "../components/Icons";
import { LineReveal, Reveal } from "../components/Motion";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { useTitle } from "../lib/useTitle";

type Fields = { name: string; company: string; email: string; phone: string; topic: string; message: string; consent: boolean };
const empty: Fields = { name: "", company: "", email: "", phone: "", topic: "", message: "", consent: false };

/**
 * Form şu an e-posta istemcisini açar (sunucu gerektirmez).
 * Bir form servisi bağlanacaksa yalnızca submit() içini değiştirmek yeterli.
 */
export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const { contact, services } = useContent();
  useTitle(t.nav.contact, c.metaDesc);
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const upd = <K extends keyof Fields>(k: K, v: Fields[K]) => setF((x) => ({ ...x, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    if (!f.name.trim()) err.name = c.errName;
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = c.errEmail;
    if (f.message.trim().length < 10) err.message = c.errMessage;
    if (!f.consent) err.consent = c.errConsent;
    setErrors(err);
    if (Object.keys(err).length) return;

    const subject = `${c.subject} — ${f.topic || c.general}`;
    const body = [
      `${c.name.replace(" *", "")}: ${f.name}`,
      f.company ? `${c.company}: ${f.company}` : null,
      `${c.email.replace(" *", "")}: ${f.email}`,
      f.phone ? `${c.phone}: ${f.phone}` : null,
      f.topic ? `${c.topic}: ${f.topic}` : null,
      "",
      f.message,
    ]
      .filter((x) => x !== null)
      .join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow={t.nav.contact}
        title={c.title}
        lead={c.lead}
        image="/media/2025-04-wa-2025-04-11-at-11-39-14.webp"
        crumbs={[{ label: t.nav.contact }]}
        short
      />

      <section className="section">
        <div className="container contact">
          <div>
            <Reveal y={16}>
              <span className="eyebrow">{c.eyebrow}</span>
            </Reveal>
            <h2 className="h2" style={{ margin: "20px 0 40px" }}>
              <LineReveal lines={c.heading} />
            </h2>
            <div className="contact__cards">
              <Reveal className="ccard">
                <strong>{c.corporate}</strong>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </Reveal>
              <Reveal className="ccard" delay={0.06}>
                <strong>{c.career}</strong>
                <a href={`mailto:${contact.careerEmail}`}>{contact.careerEmail}</a>
                <p className="small">{c.careerText}</p>
              </Reveal>
              {contact.offices.map((o, i) => (
                <Reveal key={o.title} className="ccard" delay={0.12 + i * 0.06}>
                  <strong>{o.title}</strong>
                  <p>{o.address}</p>
                  <a href={o.link} target="_blank" rel="noreferrer" className="ccard__link">
                    {c.directions}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <form className="form" onSubmit={submit} noValidate>
              <h2 className="h3">{c.formTitle}</h2>
              {sent ? (
                <div className="form__success" role="status">
                  <h3 className="h3">{c.thanks(f.name.split(" ")[0])}</h3>
                  <p className="muted">
                    {c.sentText}{" "}
                    <a href={`mailto:${contact.email}`} className="text-link">
                      {contact.email}
                    </a>
                  </p>
                  <div>
                    <button type="button" className="btn btn--ghost" onClick={() => (setF(empty), setSent(false))}>
                      {c.newMessage}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Field label={c.name} error={errors.name}>
                    <input value={f.name} onChange={(e) => upd("name", e.target.value)} autoComplete="name" />
                  </Field>
                  <Field label={c.company}>
                    <input value={f.company} onChange={(e) => upd("company", e.target.value)} autoComplete="organization" />
                  </Field>
                  <Field label={c.email} error={errors.email}>
                    <input type="email" value={f.email} onChange={(e) => upd("email", e.target.value)} autoComplete="email" />
                  </Field>
                  <Field label={c.phone}>
                    <input type="tel" value={f.phone} onChange={(e) => upd("phone", e.target.value)} autoComplete="tel" />
                  </Field>
                  <Field label={c.topic} full>
                    <select value={f.topic} onChange={(e) => upd("topic", e.target.value)}>
                      <option value="">{c.choose}</option>
                      {services.map((s) => (
                        <option key={s.slug}>{s.title}</option>
                      ))}
                      <option>{c.career}</option>
                      <option>{c.other}</option>
                    </select>
                  </Field>
                  <Field label={c.message} error={errors.message} full>
                    <textarea value={f.message} onChange={(e) => upd("message", e.target.value)} />
                  </Field>
                  <label className="check">
                    <input type="checkbox" checked={f.consent} onChange={(e) => upd("consent", e.target.checked)} />
                    <span>
                      {c.consent}
                      {errors.consent && <span className="field__error" style={{ display: "block" }}>{errors.consent}</span>}
                    </span>
                  </label>
                  <div className="form__foot">
                    <span className="muted" style={{ fontSize: 13 }}>
                      {c.required}
                    </span>
                    <button type="submit" className="btn">
                      {c.send} <ArrowRight size={18} />
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="maps">
        {contact.offices.map((o) => (
          <div className="map" key={o.title}>
            <ConsentFrame src={o.map} title={c.mapTitle(o.title)} />
            <div className="map__label">
              <b>{o.title}</b>
              <span>{o.address}</span>
              <a href={o.link} target="_blank" rel="noreferrer">
                {c.openMaps}
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: ReactElement }) {
  return (
    <div className={`field${full ? " field--full" : ""}`}>
      <label>
        <span className="field__label">{label}</span>
        {children}
      </label>
      {error && <span className="field__error">{error}</span>}
    </div>
  );
}
