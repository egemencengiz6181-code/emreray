import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CtaBand, PageHero } from "../components/Blocks";
import { Search } from "../components/Icons";
import { ease } from "../components/Motion";
import { ProjectCard, ProjectModal } from "../components/ProjectCard";
import { ProjectMap } from "../components/ProjectMap";
import type { Project, ServiceSlug } from "../data/types";
import { useContent } from "../i18n/content";
import { projectQuery } from "../i18n/routes";
import { useI18n } from "../i18n/useLang";
import { norm } from "../lib/format";
import { useTitle } from "../lib/useTitle";

export default function Projects() {
  const { t, lang } = useI18n();
  const { completed, ongoing, filterGroups, services } = useContent();
  const qp = projectQuery[lang];
  const [params, setParams] = useSearchParams();
  const status = params.get(qp.status) === qp.ongoing ? "ongoing" : "done";
  const cat = params.get(qp.category) ?? "all";
  const service = services.find((s) => s.slug === (params.get(qp.area) as ServiceSlug));
  const urlQ = params.get(qp.q) ?? "";
  const [q, setQ] = useState(urlQ);
  const [view, setView] = useState<"grid" | "map">("grid");
  const [active, setActive] = useState<Project | null>(null);
  const deepSlug = params.get(qp.project);
  useTitle(status === "ongoing" ? t.nav.ongoing : t.nav.projects, t.projects.lead);

  useEffect(() => setQ(urlQ), [urlQ]);

  const base = status === "ongoing" ? ongoing : completed;

  // ?proje=<slug> bağlantısı (ör. anasayfa banner'ı) ilgili projenin detayını doğrudan açar.
  useEffect(() => {
    if (deepSlug) setActive(base.find((p) => p.slug === deepSlug) ?? null);
  }, [deepSlug, base]);

  const counts = useMemo(
    () => Object.fromEntries(filterGroups.map((g) => [g.key, base.filter((p) => g.match(p.cat)).length])),
    [base, filterGroups],
  );

  const list = useMemo(() => {
    const g = filterGroups.find((f) => f.key === cat) ?? filterGroups[0];
    const nq = norm(q.trim());
    return base.filter(
      (p) =>
        g.match(p.cat) &&
        (!service || p.service === service.slug) &&
        (!nq || norm(`${p.title} ${p.desc}`).includes(nq)),
    );
  }, [base, cat, q, service, filterGroups]);

  const set = (next: Record<string, string | null>) => {
    const p = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => (v ? p.set(k, v) : p.delete(k)));
    setParams(p, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <PageHero
        eyebrow={t.nav.projects}
        title={status === "ongoing" ? t.projects.titleOngoing : t.projects.titleDone}
        lead={t.projects.lead}
        image="/media/2025-04-wa-2025-04-08-at-15-36-19.webp"
        crumbs={[{ label: t.nav.projects }]}
        short
      />

      <div className="filters">
        <div className="container filters__inner">
          <div className="tabs" role="toolbar" aria-label={t.projects.catFilter}>
            {filterGroups
              .filter((g) => g.key === "all" || counts[g.key] > 0)
              .map((g) => (
                <button
                  key={g.key}
                  className="tab"
                  aria-pressed={cat === g.key}
                  onClick={() => set({ [qp.category]: g.key === "all" ? null : g.key, [qp.area]: null })}
                >
                  {g.label}
                  <sup className="num">{counts[g.key]}</sup>
                </button>
              ))}
          </div>
          <div className="status-switch" role="group" aria-label={t.projects.statusLabel}>
            <button aria-pressed={status === "done"} onClick={() => set({ [qp.status]: null, [qp.category]: null })}>
              {t.nav.completedShort} · {completed.length}
            </button>
            <button aria-pressed={status === "ongoing"} onClick={() => set({ [qp.status]: qp.ongoing, [qp.category]: null })}>
              {t.nav.ongoingShort} · {ongoing.length}
            </button>
          </div>
        </div>
      </div>

      <section className="section--tight">
        <div className="container">
          <div className="result-meta">
            <span>
              <b className="num">{list.length}</b> {t.projects.count}
              {service && (
                <>
                  {" "}
                  · {service.title}{" "}
                  <button onClick={() => set({ [qp.area]: null })} className="text-link">
                    {t.projects.removeFilter}
                  </button>
                </>
              )}
            </span>
            <div className="result-meta__tools">
              <label className="search">
                <Search />
                <input
                  type="search"
                  placeholder={t.projects.searchPlaceholder}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  aria-label={t.projects.searchLabel}
                />
              </label>
              <div className="status-switch" role="group" aria-label={t.projects.viewLabel}>
                <button aria-pressed={view === "grid"} onClick={() => setView("grid")}>
                  {t.projects.viewGrid}
                </button>
                <button aria-pressed={view === "map"} onClick={() => setView("map")}>
                  {t.projects.viewMap}
                </button>
              </div>
            </div>
          </div>

          {list.length === 0 ? (
            <p className="empty">{t.projects.empty}</p>
          ) : view === "map" ? (
            <div className="map-light">
              <ProjectMap projects={list} onOpen={setActive} />
            </div>
          ) : (
            <motion.div layout className="project-grid">
              <AnimatePresence mode="popLayout">
                {list.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease, delay: Math.min(i, 8) * 0.04 }}
                  >
                    <ProjectCard p={p} onOpen={setActive} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <ProjectModal
        project={active}
        list={list}
        onClose={() => {
          setActive(null);
          if (deepSlug) set({ [qp.project]: null });
        }}
        onChange={setActive}
      />
      <CtaBand />
    </>
  );
}
