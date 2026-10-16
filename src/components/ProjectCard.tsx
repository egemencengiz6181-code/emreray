import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cities, projectPlaces } from "../data/geo";
import type { Project } from "../data/types";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { ArrowLeft, ArrowRight, Close } from "./Icons";
import { ease } from "./Motion";

export function ProjectCard({ p, onOpen, index }: { p: Project; onOpen: (p: Project) => void; index?: number }) {
  const { t } = useI18n();
  const { categoryLabels } = useContent();
  return (
    <button type="button" className="pcard" onClick={() => onOpen(p)} aria-label={`${p.title} — ${t.project.detail}`}>
      <div className="pcard__media">
        <img src={p.image} alt="" loading="lazy" draggable={false} />
        {p.metric && <span className="pcard__metric">{p.metric}</span>}
      </div>
      <div className="pcard__body">
        <div className="pcard__meta">
          {index !== undefined && <span className="num">{String(index + 1).padStart(2, "0")}</span>}
          <span>{categoryLabels[p.cat]}</span>
        </div>
        <span className="pcard__title">{p.title}</span>
        {p.desc && <span className="pcard__desc">{p.desc}</span>}
      </div>
    </button>
  );
}

export function ProjectModal({
  project,
  list,
  onClose,
  onChange,
}: {
  project: Project | null;
  list: Project[];
  onClose: () => void;
  onChange: (p: Project) => void;
}) {
  const { t, L } = useI18n();
  const { categoryLabels, services } = useContent();
  const idx = project ? list.findIndex((x) => x.slug === project.slug) : -1;
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;
  const gallery = project?.gallery ?? [];
  // Açık fotoğraf projeye bağlı tutulur; proje değişince lightbox kendiliğinden kapanır.
  const [lb, setLb] = useState<{ slug: string; i: number } | null>(null);
  const photo = lb && lb.slug === project?.slug ? lb.i : null;
  const setPhoto = (i: number | null) => setLb(i === null || !project ? null : { slug: project.slug, i });

  const open = Boolean(project);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Lightbox açıkken oklar fotoğraflar arasında gezinir, Esc yalnızca lightbox'ı kapatır.
  useEffect(() => {
    if (!project || photo !== null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && next) onChange(next);
      if (e.key === "ArrowLeft" && prev) onChange(prev);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, next, prev, onClose, onChange, photo]);

  const svc = project ? services.find((s) => s.slug === project.service) : null;
  const places = project ? (projectPlaces[project.slug] ?? []).map((k) => cities[k]?.name).filter(Boolean) : [];

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-lenis-prevent
        >
          <div className="modal__backdrop" onClick={onClose} />
          <motion.div
            className="modal__panel"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <button className="modal__close" onClick={onClose} aria-label={t.common.close} autoFocus>
              <Close />
            </button>
            <div className="modal__media">
              <AnimatePresence mode="sync">
                <motion.img
                  key={project.slug}
                  src={project.image}
                  alt={project.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                />
              </AnimatePresence>
            </div>
            <div className="modal__body">
              <span className="eyebrow">{categoryLabels[project.cat]}</span>
              <h2 id="modal-title" className="modal__title">
                {project.title}
              </h2>
              {project.desc && (
                <p className="lead" style={{ fontSize: 17 }}>
                  {project.desc}
                </p>
              )}
              <dl className="spec">
                <div>
                  <dt>{t.project.status}</dt>
                  <dd>
                    <span className={`status-pill${project.status === "ongoing" ? " is-ongoing" : ""}`}>
                      {project.status === "ongoing" ? t.project.ongoing : t.project.done}
                    </span>
                  </dd>
                </div>
                {project.metric && (
                  <div>
                    <dt>{t.project.scope}</dt>
                    <dd>{project.metric}</dd>
                  </div>
                )}
                {(project.location || places.length > 0) && (
                  <div>
                    <dt>{t.project.location}</dt>
                    <dd>{project.location ?? places.join(" — ")}</dd>
                  </div>
                )}
                {project.employer && (
                  <div>
                    <dt>{t.project.employer}</dt>
                    <dd>{project.employer}</dd>
                  </div>
                )}
                {project.contractor && (
                  <div>
                    <dt>{t.project.contractor}</dt>
                    <dd>{project.contractor}</dd>
                  </div>
                )}
                {project.period && (
                  <div>
                    <dt>{t.project.period}</dt>
                    <dd>{project.period}</dd>
                  </div>
                )}
                {svc && (
                  <div>
                    <dt>{t.project.area}</dt>
                    <dd>
                      <Link to={L.service(svc.slug)} onClick={onClose} className="text-link">
                        {svc.title}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
              {gallery.length > 0 && (
                <div className="pgallery">
                  <div className="pgallery__head">
                    <span>{t.project.gallery}</span>
                    <span className="num muted">
                      {gallery.length} {t.project.photos}
                    </span>
                  </div>
                  <div className="pgallery__grid">
                    {gallery.map((g, i) => (
                      <button
                        key={g.src}
                        type="button"
                        className="pgallery__thumb"
                        onClick={() => setPhoto(i)}
                        aria-label={`${t.project.openPhoto}: ${g.caption}`}
                      >
                        <img src={g.src} alt={g.caption} loading="lazy" decoding="async" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="modal__nav">
                <button className="round-btn" disabled={!prev} onClick={() => prev && onChange(prev)} aria-label={t.project.prev}>
                  <ArrowLeft />
                </button>
                <span className="muted num" style={{ alignSelf: "center", fontSize: 14 }}>
                  {String(idx + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </span>
                <button className="round-btn" disabled={!next} onClick={() => next && onChange(next)} aria-label={t.project.next}>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
          <Lightbox items={gallery} index={photo} onIndex={setPhoto} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Lightbox({
  items,
  index,
  onIndex,
}: {
  items: { src: string; caption: string }[];
  index: number | null;
  onIndex: (i: number | null) => void;
}) {
  const { t } = useI18n();
  const n = items.length;

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onIndex(null);
      if (e.key === "ArrowRight" && n > 1) onIndex((index + 1) % n);
      if (e.key === "ArrowLeft" && n > 1) onIndex((index - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, n, onIndex]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.caption}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => onIndex(null)}
        >
          <button className="modal__close" onClick={() => onIndex(null)} aria-label={t.common.close} autoFocus>
            <Close />
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              <motion.img
                key={item.src}
                src={item.src}
                alt={item.caption}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease }}
              />
            </AnimatePresence>
            <figcaption>
              <span>{item.caption}</span>
              <span className="num">
                {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
          {n > 1 && (
            <>
              <button
                className="round-btn lightbox__prev"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndex((index - 1 + n) % n);
                }}
                aria-label={t.project.prevPhoto}
              >
                <ArrowLeft />
              </button>
              <button
                className="round-btn lightbox__next"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndex((index + 1) % n);
                }}
                aria-label={t.project.nextPhoto}
              >
                <ArrowRight />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
