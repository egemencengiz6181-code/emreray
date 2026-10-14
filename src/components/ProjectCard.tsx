import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
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

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && next) onChange(next);
      if (e.key === "ArrowLeft" && prev) onChange(prev);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, next, prev, onClose, onChange]);

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
                {places.length > 0 && (
                  <div>
                    <dt>{t.project.location}</dt>
                    <dd>{places.join(" — ")}</dd>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
