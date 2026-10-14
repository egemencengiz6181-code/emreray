import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { LangSwitch } from "./Header";
import { ease } from "./Motion";

export function MenuOverlay() {
  const { t, L } = useI18n();
  const { services, contact } = useContent();
  const [hover, setHover] = useState<number | null>(null);
  const { pathname } = useLocation();

  const items = [
    { label: t.common.home, to: L.home(), image: "/media/2024-12-dscn4806-scaled.webp" },
    {
      label: t.nav.corporate,
      to: L.about(),
      image: "/media/2024-12-img-3618.webp",
      sub: [
        { label: t.nav.about, to: L.about() },
        { label: t.nav.sustainability, to: L.sustainability() },
        { label: t.nav.quality, to: L.policy("kalite-politikasi") },
        { label: t.nav.ohs, to: L.policy("cevre-ve-isg-politikasi") },
      ],
    },
    {
      label: t.nav.services,
      to: L.services(),
      image: "/media/2025-02-wa-2025-01-27-at-17-15-09-6.webp",
      sub: services.map((s) => ({ label: s.short, to: L.service(s.slug) })),
    },
    {
      label: t.nav.projects,
      to: L.projects(),
      image: "/media/2025-04-wa-2025-04-08-at-15-36-19.webp",
      sub: [
        { label: t.nav.completedShort, to: L.projects() },
        { label: t.nav.ongoingShort, to: L.projects({ ongoing: true }) },
      ],
    },
    { label: t.nav.news, to: L.news(), image: "/media/2024-12-main.webp" },
    { label: t.nav.contact, to: L.contact(), image: "/media/2025-04-wa-2025-04-11-at-11-41-08.webp" },
  ];

  const activeIdx = Math.max(
    0,
    items.findIndex((i, idx) => (idx === 0 ? pathname === i.to : pathname.startsWith(i.to.split("?")[0]))),
  );
  const shown = hover ?? activeIdx;

  return (
    <motion.div
      id="site-menu"
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t.common.siteMenu}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.8, ease }}
      data-lenis-prevent
    >
      <div className="overlay__main">
        <ul className="overlay__list">
          {items.map((it, i) => (
            <motion.li
              key={it.to}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 + i * 0.06 }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <Link to={it.to} className={`overlay__link${i === activeIdx ? " is-active" : ""}`}>
                <span className="num">0{i + 1}</span>
                {it.label}
              </Link>
              {it.sub && (
                <ul className="overlay__sub">
                  {it.sub.map((s) => (
                    <li key={s.to}>
                      <Link to={s.to}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="overlay__foot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div>
            <strong>{t.common.langLabel}</strong>
            <LangSwitch className="lang--light" />
          </div>
          <div>
            <strong>{t.common.phone}</strong>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
          <div>
            <strong>{t.common.email}</strong>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div>
            <strong>{t.common.social}</strong>
            {contact.social.map((s, i) => (
              <span key={s.name}>
                {i > 0 && " · "}
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.name}
                </a>
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="overlay__visual">
        <AnimatePresence mode="sync">
          <motion.img
            key={items[shown].image}
            src={items[shown].image}
            alt=""
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
