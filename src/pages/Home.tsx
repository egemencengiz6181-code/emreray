import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CtaBand, LinkArrow, Marquee, SectionHead } from "../components/Blocks";
import { AreaIcon, ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "../components/Icons";
import { Counter, ease, LineReveal, Parallax, Reveal } from "../components/Motion";
import { ProjectCard, ProjectModal } from "../components/ProjectCard";
import { ProjectMap } from "../components/ProjectMap";
import { cities, projectPlaces } from "../data/geo";
import type { Project } from "../data/types";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { formatDate } from "../lib/format";
import { useTitle } from "../lib/useTitle";

export default function Home() {
  useTitle();
  const { t } = useI18n();
  const { completed } = useContent();
  const [active, setActive] = useState<Project | null>(null);
  const cityNames = [...new Set(completed.flatMap((p) => projectPlaces[p.slug] ?? []))].map((k) => cities[k].name);

  return (
    <>
      <Hero />
      <Intro />
      <Numbers />
      <Marquee items={cityNames} label={t.marquee} />
      <MapSection onOpen={setActive} />
      <Areas />
      <Showcase />
      <Quality />
      <News />
      <CtaBand />
      <ProjectModal project={active} list={completed} onClose={() => setActive(null)} onChange={setActive} />
    </>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const { t, L } = useI18n();
  const { services } = useContent();
  const video = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  // Mobil veri / veri tasarrufu modunda 15 MB'lık videoyu indirme, poster görseli yeter.
  const [useVideo] = useState(() => {
    const c = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    return !c?.saveData && !reduce && window.matchMedia("(min-width: 700px)").matches;
  });
  const [playing, setPlaying] = useState(useVideo);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const toggle = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const [l1, l2, l3] = t.home.title;

  return (
    <section className="hero" ref={ref}>
      <div className="hero__clip">
      <motion.div className="hero__media" style={{ y }}>
        {useVideo ? (
          <video
            ref={video}
            src="/media/hero.mp4"
            poster="/media/2025-04-wa-2025-04-08-at-15-36-19.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img src="/media/2025-04-wa-2025-04-08-at-15-36-19.webp" alt="" />
        )}
      </motion.div>
      </div>

      <div className="container hero__content">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
        >
          {t.home.eyebrow}
        </motion.span>
        <h1 className="display hero__title">
          <LineReveal lines={[l1, l2, <em key="h">{l3}</em>]} delay={0.5} />
        </h1>
        <motion.div
          className="hero__row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.9 }}
        >
          <p className="hero__lead">{t.home.lead}</p>
          <div className="hero__actions">
            <Link to={L.projects()} className="btn btn--signal">
              {t.common.ourProjects} <ArrowRight size={18} />
            </Link>
            {useVideo && (
              <button className="icon-round icon-round--glass" onClick={toggle} aria-label={playing ? t.home.pause : t.home.play}>
                {playing ? <Pause /> : <Play />}
              </button>
            )}
          </div>
        </motion.div>
      </div>

      <div className="container hero__boxes-wrap">
        <div className="hero__boxes">
          {services.slice(0, 4).map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.1 + i * 0.08 }}
            >
              <Link to={L.service(s.slug)} className="hero-box">
                <span className="hero-box__img" style={{ backgroundImage: `url(${s.hero})` }} />
                <div className="hero-box__top">
                  <span className="hero-box__no num">{s.no}</span>
                  <ArrowUpRight className="hero-box__arrow" size={20} />
                </div>
                <div className="hero-box__bottom">
                  <div className="hero-box__title">{s.short}</div>
                  <div className="hero-box__sub">{s.tagline}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tanıtım ---------------- */

function Word({ word, i, total, progress }: { word: string; i: number; total: number; progress: MotionValue<number> }) {
  const start = i / total;
  const opacity = useTransform(progress, [start, start + 1 / total], [0.16, 1]);
  return (
    <motion.span style={{ opacity }}>
      {word}{" "}
    </motion.span>
  );
}

function Intro() {
  const { t, L } = useI18n();
  const { company } = useContent();
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = t.home.statement.split(" ");

  return (
    <section className="section">
      <div className="container intro">
        <div className="intro__aside">
          <Reveal>
            <div className="intro__since">
              <b className="num">
                <Counter to={company.founded} format={false} duration={1.8} />
              </b>
              <span>{t.home.since}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="intro__figure">
            <Parallax amount={50}>
              <img src="/media/2024-12-img-3618.webp" alt={t.home.introAlt} loading="lazy" />
            </Parallax>
          </Reveal>
        </div>

        <div>
          <Reveal y={16}>
            <span className="eyebrow">{t.home.introEyebrow}</span>
          </Reveal>
          <p ref={ref} className="intro__statement">
            {words.map((w, i) => (
              <Word key={i} word={w} i={i} total={words.length} progress={scrollYProgress} />
            ))}
          </p>
          <div className="intro__body">
            <Reveal>
              <p>{t.home.introP1}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>{t.home.introP2}</p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div style={{ marginTop: 44 }}>
              <LinkArrow to={L.about()}>{t.home.introLink}</LinkArrow>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Rakamlar ---------------- */

function Numbers() {
  const { t, L, lang } = useI18n();
  const { stats } = useContent();
  const total = 5977;
  const ours = 2679 + 811;
  const fmt = (n: number) => n.toLocaleString(lang === "en" ? "en-GB" : "tr-TR");
  return (
    <section className="section numbers">
      <div className="container">
        <SectionHead
          eyebrow={t.home.numbersEyebrow}
          title={t.home.numbersTitle}
          action={<LinkArrow to={L.projects()}>{t.home.allProjects}</LinkArrow>}
        />

        <div className="numbers__grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={(i % 3) * 0.08}>
              <span className="stat__km num">KM {String(i).padStart(2, "0")}+000</span>
              <div className="stat__value">
                {s.prefix && <small>{s.prefix}</small>}
                <Counter to={s.value} format={!s.plain} />
                {s.suffix && <small>{s.suffix}</small>}
              </div>
              <p className="stat__label">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="numbers__note">
          <div className="track-bar">
            <div className="track-bar__meta">
              <span>
                {t.home.oursLabel} <b className="num">{fmt(ours)} km</b>
              </span>
              <span>
                {t.home.totalLabel} <b className="num">{fmt(total)} km</b>
              </span>
            </div>
            <div className="track-bar__line">
              <motion.div
                className="track-bar__fill"
                style={{ width: `${(ours / total) * 100}%` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Harita ---------------- */

function MapSection({ onOpen }: { onOpen: (p: Project) => void }) {
  const { t } = useI18n();
  const { completed } = useContent();
  return (
    <section className="section section--dark map-section">
      <div className="container">
        <SectionHead eyebrow={t.home.mapEyebrow} title={t.home.mapTitle} lead={t.home.mapLead} />
        <Reveal>
          <ProjectMap projects={completed} onOpen={onOpen} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Faaliyet alanları ---------------- */

function Areas() {
  const { t, L } = useI18n();
  const { services } = useContent();
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          eyebrow={t.home.areasEyebrow}
          title={t.home.areasTitle}
          action={<LinkArrow to={L.services()}>{t.home.allAreas}</LinkArrow>}
        />
        <div className="areas">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08} y={30}>
              <Link to={L.service(s.slug)} className="area">
                <div className="area__img">
                  <img src={s.hero} alt="" loading="lazy" />
                </div>
                <div className="area__top">
                  <span className="area__icon">
                    <AreaIcon name={s.slug} />
                  </span>
                  <span className="area__no num">{s.no}</span>
                </div>
                <div className="area__body">
                  <h3 className="area__title">{s.title}</h3>
                  <p className="area__sub">{s.tagline}</p>
                  <div className="area__foot">
                    {t.common.details} <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Proje vitrini ---------------- */

function Showcase() {
  const { t, L } = useI18n();
  const { featured } = useContent();
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });
  const [active, setActive] = useState<Project | null>(null);
  const drag = useRef({ down: false, x: 0, left: 0, moved: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setEdges({ start: el.scrollLeft < 4, end: el.scrollLeft > max - 4 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".pcard");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 400) + 24), behavior: "smooth" });
  };

  return (
    <section className="section section--mist showcase">
      <div className="container">
        <SectionHead
          eyebrow={t.home.showcaseEyebrow}
          title={t.home.showcaseTitle}
          lead={t.home.showcaseLead}
          action={
            <div className="showcase__arrows">
              <button className="round-btn" onClick={() => step(-1)} disabled={edges.start} aria-label={t.home.prev}>
                <ArrowLeft />
              </button>
              <button className="round-btn" onClick={() => step(1)} disabled={edges.end} aria-label={t.home.next}>
                <ArrowRight />
              </button>
            </div>
          }
        />
      </div>

      <div
        ref={track}
        className="showcase__track"
        onScroll={update}
        data-lenis-prevent-wheel
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return;
          drag.current = { down: true, x: e.clientX, left: track.current!.scrollLeft, moved: false };
        }}
        onPointerMove={(e) => {
          if (!drag.current.down) return;
          const dx = e.clientX - drag.current.x;
          if (Math.abs(dx) > 5) drag.current.moved = true;
          track.current!.scrollLeft = drag.current.left - dx;
        }}
        onPointerUp={() => (drag.current.down = false)}
        onPointerLeave={() => (drag.current.down = false)}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.stopPropagation();
            e.preventDefault();
            drag.current.moved = false;
          }
        }}
      >
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i, 3) * 0.08} y={30} className="showcase__item">
            <ProjectCard p={p} onOpen={setActive} index={i} />
          </Reveal>
        ))}
        <div style={{ flex: "0 0 1px" }} />
      </div>

      <div className="container">
        <div className="showcase__foot">
          <div className="showcase__progress" aria-hidden>
            <i style={{ transform: `scaleX(${0.12 + progress * 0.88})` }} />
          </div>
          <LinkArrow to={L.projects()}>{t.home.showcaseAll}</LinkArrow>
        </div>
      </div>

      <ProjectModal project={active} list={featured} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}

/* ---------------- Kalite ---------------- */

const YEARS = new Date().getFullYear() - 1994;

function Quality() {
  const { t, L } = useI18n();
  const { certifications } = useContent();
  return (
    <section className="section">
      <div className="container quality">
        <Reveal className="quality__media">
          <Parallax amount={40}>
            <img src="/media/2025-01-dscn4427-scaled.webp" alt={t.home.qualityAlt} loading="lazy" />
          </Parallax>
          <div className="quality__badge">
            <b className="num">{YEARS}+</b>
            <span>{t.home.yearsBadge}</span>
          </div>
        </Reveal>

        <div>
          <Reveal y={16}>
            <span className="eyebrow">{t.home.qualityEyebrow}</span>
          </Reveal>
          <h2 className="h2" style={{ marginTop: 20 }}>
            <LineReveal lines={t.home.qualityTitle} />
          </h2>
          <Reveal delay={0.1}>
            <p className="lead" style={{ marginTop: 24 }}>
              {t.home.qualityText}
            </p>
          </Reveal>
          <Certs items={certifications} />
          <Reveal delay={0.2}>
            <div style={{ marginTop: 40, display: "flex", gap: 32, flexWrap: "wrap" }}>
              <LinkArrow to={L.policy("kalite-politikasi")}>{t.nav.quality}</LinkArrow>
              <LinkArrow to={L.sustainability()}>{t.nav.sustainability}</LinkArrow>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Certs({ items, flush }: { items: { code: string; name: string; note: string }[]; flush?: boolean }) {
  return (
    <div className="certs" style={flush ? { marginTop: 0 } : undefined}>
      {items.map((c, i) => (
        <Reveal key={c.code} className="cert" delay={i * 0.08} y={20}>
          <span className="cert__seal num">ISO</span>
          <div>
            <div className="cert__code">{c.code}</div>
            <div className="cert__name">{c.name}</div>
          </div>
          <span className="cert__note">{c.note}</span>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Haberler ---------------- */

function News() {
  const { t, L, lang } = useI18n();
  const { posts } = useContent();
  const [feature, ...rest] = posts;
  const fd = formatDate(feature.date, lang);
  return (
    <section className="section section--mist">
      <div className="container">
        <SectionHead
          eyebrow={t.home.newsEyebrow}
          title={t.home.newsTitle}
          action={<LinkArrow to={L.news()}>{t.common.viewAll}</LinkArrow>}
        />
        <div className="news-layout">
          <Reveal>
            <Link to={L.post(feature.slug)} className="news-feature">
              <img src={feature.image} alt="" loading="lazy" />
              <div className="news-feature__body">
                <div className="news-feature__meta">
                  <span className="num">{fd.short}</span>
                  <span>{feature.category}</span>
                </div>
                <h3 className="news-feature__title">{feature.title}</h3>
                <p>{feature.excerpt}</p>
                <span className="link-arrow link-arrow--light">
                  {t.common.readMore}
                  <span className="link-arrow__circle">
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="news-list">
            {rest.map((p, i) => {
              const d = formatDate(p.date, lang);
              return (
                <Reveal key={p.slug} delay={i * 0.1} y={24}>
                  <Link to={L.post(p.slug)} className="news-item">
                    <div className="date">
                      <b className="num">{d.day}</b>
                      <span>
                        {d.month} {d.year}
                      </span>
                    </div>
                    <div>
                      <span className="news-item__cat">{p.category}</span>
                      <div className="news-item__title">{p.title}</div>
                      <p className="news-item__excerpt">{p.excerpt}</p>
                    </div>
                    <span className="link-arrow__circle">
                      <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
