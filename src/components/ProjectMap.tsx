import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { cities, MAP_H, MAP_W, projectPlaces, turkeyPath } from "../data/geo";
import type { Project, ProjectCategory } from "../data/types";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { ArrowRight, Close } from "./Icons";
import { ease } from "./Motion";

const ROUTE_CATS: ProjectCategory[] = ["yht", "konvansiyonel", "sinyalizasyon"];
const LABELS = ["istanbul", "ankara", "izmir", "eskisehir", "adana", "kayseri", "antalya", "erzurum", "mus", "balikesir", "konya", "edirne"];

export function ProjectMap({ projects, onOpen }: { projects: Project[]; onOpen: (p: Project) => void }) {
  const { t } = useI18n();
  const { categoryLabels } = useContent();
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  const { byCity, routes } = useMemo(() => {
    const byCity: Record<string, Project[]> = {};
    const seen = new Set<string>();
    const routes: { key: string; d: string; cities: string[] }[] = [];
    for (const p of projects) {
      const places = projectPlaces[p.slug];
      if (!places) continue;
      for (const c of places) (byCity[c] ??= []).push(p);
      if (places.length > 1 && ROUTE_CATS.includes(p.cat)) {
        for (let i = 0; i < places.length - 1; i++) {
          const [a, b] = [places[i], places[i + 1]];
          const k = [a, b].sort().join("|");
          if (seen.has(k)) continue;
          seen.add(k);
          const A = cities[a];
          const B = cities[b];
          routes.push({ key: k, d: `M${A.x},${A.y} L${B.x},${B.y}`, cities: [a, b] });
        }
      }
    }
    return { byCity, routes };
  }, [projects]);

  const cityKeys = Object.keys(byCity).sort((a, b) => byCity[a].length - byCity[b].length);
  const total = new Set(Object.values(byCity).flat().map((p) => p.slug)).size;
  const active = selected ?? hover;
  const list = selected ? byCity[selected] ?? [] : [];

  return (
    <div className="pmap">
      <div className="pmap__canvas">
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label={t.home.mapEyebrow}>
          <defs>
            <pattern id="dots" width="9" height="9" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.1" className="pmap__dot" />
            </pattern>
            <clipPath id="tr-clip">
              <path d={turkeyPath} />
            </clipPath>
          </defs>
          <path d={turkeyPath} className="pmap__land" />
          <rect width={MAP_W} height={MAP_H} fill="url(#dots)" clipPath="url(#tr-clip)" />
          <path d={turkeyPath} className="pmap__border" />

          <g className="pmap__routes">
            {routes.map((r, i) => {
              const on = active ? r.cities.includes(active) : false;
              return (
                <motion.path
                  key={r.key}
                  d={r.d}
                  className={`pmap__route${on ? " is-on" : ""}${active && !on ? " is-dim" : ""}`}
                  initial={reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease, delay: 0.3 + i * 0.025 }}
                />
              );
            })}
          </g>

          <g>
            {cityKeys.map((k) => {
              const c = cities[k];
              const n = byCity[k].length;
              const r = 3.2 + Math.sqrt(n) * 2.1;
              const on = active === k;
              return (
                <g
                  key={k}
                  className={`pmap__city${on ? " is-on" : ""}`}
                  transform={`translate(${c.x} ${c.y})`}
                  tabIndex={0}
                  role="button"
                  aria-label={`${c.name}: ${n} ${t.map.projects}`}
                  onMouseEnter={() => setHover(k)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(k)}
                  onBlur={() => setHover(null)}
                  onClick={() => setSelected((s) => (s === k ? null : k))}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setSelected(k))}
                >
                  <circle r={r + 7} className="pmap__halo" />
                  <circle r={r} className="pmap__pin" />
                  {(LABELS.includes(k) || on) && (
                    <text y={-r - 8} textAnchor="middle" className="pmap__label">
                      {c.name}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        <div className="pmap__legend">
          <span>
            <i className="pmap__legend-pin" /> {t.map.legendCity}
          </span>
          <span>
            <i className="pmap__legend-route" /> {t.map.legendRoute}
          </span>
        </div>
      </div>

      <aside className="pmap__panel" data-lenis-prevent>
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
              className="pmap__summary"
            >
              <div className="pmap__stats">
                <div>
                  <b className="num">{cityKeys.length}</b>
                  <span>{t.map.cities}</span>
                </div>
                <div>
                  <b className="num">{total}</b>
                  <span>{t.map.projects}</span>
                </div>
                <div>
                  <b className="num">{routes.length}</b>
                  <span>{t.map.routes}</span>
                </div>
              </div>
              <p className="pmap__pick">{t.map.pick}</p>
              <p className="pmap__hint">{t.map.pickHint}</p>
              <ul className="pmap__top">
                {[...cityKeys]
                  .reverse()
                  .slice(0, 6)
                  .map((k) => (
                    <li key={k}>
                      <button onClick={() => setSelected(k)} onMouseEnter={() => setHover(k)} onMouseLeave={() => setHover(null)}>
                        <span>{cities[k].name}</span>
                        <span className="num">{byCity[k].length}</span>
                      </button>
                    </li>
                  ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
            >
              <div className="pmap__head">
                <div>
                  <span className="eyebrow">{t.map.in(cities[selected].name)}</span>
                  <h3>
                    {cities[selected].name} <span className="num">{list.length}</span>
                  </h3>
                </div>
                <button className="icon-round icon-round--light" onClick={() => setSelected(null)} aria-label={t.map.clear}>
                  <Close size={16} />
                </button>
              </div>
              <ul className="pmap__list">
                {list.map((p) => (
                  <li key={p.slug}>
                    <button onClick={() => onOpen(p)}>
                      <img src={p.image} alt="" loading="lazy" />
                      <span>
                        <small>
                          {categoryLabels[p.cat]}
                          {p.metric && ` · ${p.metric}`}
                        </small>
                        <b>{p.title}</b>
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </div>
  );
}
