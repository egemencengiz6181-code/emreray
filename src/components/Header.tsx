import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContent } from "../i18n/content";
import { switchPath } from "../i18n/routes";
import { useI18n } from "../i18n/useLang";
import { thumb } from "../lib/format";
import { ArrowRight, ArrowUp, ChevronDown, Search } from "./Icons";
import { LogoHorizontal } from "./Logo";
import { MenuOverlay } from "./MenuOverlay";
import { SearchOverlay } from "./SearchOverlay";
import { useLenis } from "./SmoothScroll";

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, t } = useI18n();
  const { pathname, search } = useLocation();
  return (
    <div className={`lang ${className}`} role="group" aria-label={t.common.langLabel}>
      {(["tr", "en"] as const).map((l) => (
        <Link
          key={l}
          to={switchPath(pathname, search, l)}
          aria-current={lang === l ? "true" : undefined}
          hrefLang={l}
          lang={l}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const { t, L } = useI18n();
  const { services } = useContent();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false);
  const [preview, setPreview] = useState(0);
  const { pathname, search } = useLocation();
  const lenis = useLenis();

  const nav = [
    {
      label: t.nav.corporate,
      to: L.about(),
      children: [
        { label: t.nav.about, to: L.about() },
        { label: t.nav.sustainability, to: L.sustainability() },
        { label: t.nav.quality, to: L.policy("kalite-politikasi") },
        { label: t.nav.ohs, to: L.policy("cevre-ve-isg-politikasi") },
      ],
    },
    { label: t.nav.services, to: L.services(), mega: true },
    {
      label: t.nav.projects,
      to: L.projects(),
      children: [
        { label: t.nav.completed, to: L.projects() },
        { label: t.nav.ongoing, to: L.projects({ ongoing: true }) },
      ],
    },
    { label: t.nav.news, to: L.news() },
    { label: t.nav.contact, to: L.contact() },
  ];

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 320 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.header = hidden ? "hidden" : "shown";
  }, [hidden]);

  useEffect(() => {
    setOpen(false);
    setSearching(false);
  }, [pathname, search]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open || searching);
    if (open || searching) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSearching(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearching(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, searching, lenis]);

  const cls = ["header", solid && "is-solid", hidden && !open && "is-hidden", open && "menu-active"].filter(Boolean).join(" ");

  return (
    <>
      <header className={cls}>
        <div className="container header__inner">
          <Link to={L.home()} className="header__logo" aria-label="EMRERAY">
            <LogoHorizontal />
          </Link>

          <nav className="header__nav" aria-label={t.common.mainMenu}>
            <ul>
              {nav.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.to} className={({ isActive }) => `nav-link${isActive ? " is-active" : ""}`}>
                    {item.label}
                    {(item.children || item.mega) && <ChevronDown />}
                  </NavLink>

                  {item.children && (
                    <div className="dropdown">
                      {item.children.map((c) => (
                        <Link key={c.to} to={c.to}>
                          {c.label}
                          <ArrowRight size={16} />
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.mega && (
                    <div className="mega">
                      <div className="mega__list">
                        {services.map((s, i) => (
                          <Link
                            key={s.slug}
                            to={L.service(s.slug)}
                            className="mega__item"
                            onMouseEnter={() => setPreview(i)}
                            onFocus={() => setPreview(i)}
                          >
                            <span className="num">{s.no}</span>
                            <strong>{s.title}</strong>
                            <span>{s.tagline}</span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega__preview">
                        {services.map((s, i) => (
                          <img
                            key={s.slug}
                            src={thumb(s.hero)}
                            alt=""
                            decoding="async"
                            style={{ opacity: i === preview ? 1 : 0, transform: i === preview ? "scale(1)" : "scale(1.06)" }}
                          />
                        ))}
                        <div className="mega__preview-text">
                          <strong>{services[preview].title}</strong>
                          {services[preview].lead}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <LangSwitch className="header__lang" />
            <button className="icon-round" onClick={() => setSearching(true)} aria-label={t.search.open}>
              <Search size={18} />
            </button>
            <Link to={L.contact()} className="btn btn--signal header__cta">
              {t.common.quote} <ArrowRight size={16} />
            </Link>
            <button
              className={`menu-btn${open ? " is-open" : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              <span className="menu-btn__label">{open ? t.common.close : t.common.menu}</span>
              <span className="menu-btn__icon" aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>{open && <MenuOverlay key="menu" />}</AnimatePresence>
      <AnimatePresence>{searching && <SearchOverlay key="search" onClose={() => setSearching(false)} />}</AnimatePresence>
      <AnimatePresence>
        {solid && !open && (
          <motion.button
            key="top"
            className="to-top"
            aria-label={t.common.toTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
