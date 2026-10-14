import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useLang";
import { ArrowRight } from "./Icons";
import { ease, LineReveal, Parallax, Reveal } from "./Motion";

export function LinkArrow({ to, children, light }: { to: string; children: ReactNode; light?: boolean }) {
  return (
    <Link to={to} className={`link-arrow${light ? " link-arrow--light" : ""}`}>
      {children}
      <span className="link-arrow__circle">
        <ArrowRight size={18} />
      </span>
    </Link>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  action,
}: {
  eyebrow: string;
  title: ReactNode[];
  lead?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-head">
      <div className="section-head__title">
        <Reveal y={16}>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
        <h2 className="h2">
          <LineReveal lines={title} />
        </h2>
        {lead && (
          <Reveal delay={0.15}>
            <p className="lead" style={{ maxWidth: 640 }}>
              {lead}
            </p>
          </Reveal>
        )}
      </div>
      {action && <Reveal delay={0.2}>{action}</Reveal>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs,
  short,
}: {
  eyebrow: string;
  title: ReactNode[];
  lead?: string;
  image: string;
  crumbs: { label: string; to?: string }[];
  short?: boolean;
}) {
  const reduce = useReducedMotion();
  const { t, L } = useI18n();
  return (
    <section className={`page-hero${short ? " page-hero--short" : ""}`}>
      <div className="page-hero__media">
        <Parallax amount={70}>
          <motion.img
            src={image}
            alt=""
            initial={reduce ? false : { scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease }}
          />
        </Parallax>
      </div>
      <div className="container page-hero__content">
        <motion.nav
          className="breadcrumb"
          aria-label={t.common.location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link to={L.home()}>{t.common.home}</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: "contents" }}>
              <span aria-hidden>/</span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </motion.nav>
        <div style={{ marginTop: 32 }}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
          >
            {eyebrow}
          </motion.span>
        </div>
        <h1 className="h1 page-hero__title">
          <LineReveal lines={title} delay={0.35} />
        </h1>
        {lead && (
          <motion.p
            className="page-hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
          >
            {lead}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  image = "/media/2025-02-wa-2025-01-27-at-17-15-08-1.webp",
  title,
  text,
}: {
  image?: string;
  title?: string[];
  text?: string;
}) {
  const { t, L } = useI18n();
  return (
    <section className="cta">
      <div className="cta__bg">
        <Parallax amount={80}>
          <img src={image} alt="" loading="lazy" />
        </Parallax>
      </div>
      <div className="container">
        <div className="on-dark">
          <Reveal y={16}>
            <span className="eyebrow">{t.cta.eyebrow}</span>
          </Reveal>
          <h2 className="h1">
            <LineReveal lines={title ?? t.cta.title} />
          </h2>
        </div>
        <Reveal className="cta__actions" delay={0.2}>
          <p>{text ?? t.cta.text}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link to={L.contact()} className="btn btn--signal">
              {t.common.contactUs} <ArrowRight size={18} />
            </Link>
            <Link to={L.projects()} className="btn btn--ghost btn--on-dark">
              {t.common.ourProjects}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Şehir adlarının yavaşça kaydığı bant. */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = items.join("  ·  ");
  return (
    <section className="marquee" aria-label={label}>
      <div className="marquee__track" aria-hidden>
        <span>{row}  ·  </span>
        <span>{row}  ·  </span>
      </div>
      <p className="sr-only">{items.join(", ")}</p>
    </section>
  );
}
