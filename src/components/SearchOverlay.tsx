import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { norm } from "../lib/format";
import { ArrowRight, Close, Search } from "./Icons";
import { ease } from "./Motion";

export function SearchOverlay({ onClose }: { onClose: () => void }) {
  const { t, L } = useI18n();
  const { services, completed, posts, categoryLabels } = useContent();
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const res = useMemo(() => {
    const n = norm(q.trim());
    if (n.length < 2) return null;
    const hit = (s: string) => norm(s).includes(n);
    const proj = completed.filter((p) => hit(`${p.title} ${p.desc} ${categoryLabels[p.cat]}`));
    return {
      services: services.filter((s) => hit(`${s.title} ${s.tagline} ${s.lead} ${s.scope.join(" ")}`)),
      projects: proj,
      posts: posts.filter((p) => hit(`${p.title} ${p.excerpt} ${p.category}`)),
    };
  }, [q, services, completed, posts, categoryLabels]);

  const total = res ? res.services.length + res.projects.length + res.posts.length : 0;

  return (
    <motion.div
      className="search-ov"
      role="dialog"
      aria-modal="true"
      aria-label={t.common.search}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      data-lenis-prevent
    >
      <div className="search-ov__backdrop" onClick={onClose} />
      <motion.div
        className="search-ov__panel"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <form
          className="search-ov__bar container"
          onSubmit={(e) => {
            e.preventDefault();
            if (q.trim()) navigate(L.projects({ q: q.trim() }));
          }}
        >
          <Search size={24} />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.search.placeholder}
            aria-label={t.search.placeholder}
          />
          <kbd>esc</kbd>
          <button type="button" className="icon-round" onClick={onClose} aria-label={t.common.close}>
            <Close size={18} />
          </button>
        </form>

        <div className="search-ov__body container">
          {!res && <p className="muted">{t.search.hint}</p>}
          {res && total === 0 && <p className="muted">{t.search.none}</p>}
          {res && total > 0 && (
            <div className="search-ov__grid">
              {res.services.length > 0 && (
                <section>
                  <h3 className="eyebrow">{t.search.services}</h3>
                  <ul>
                    {res.services.map((s) => (
                      <li key={s.slug}>
                        <Link to={L.service(s.slug)}>
                          <span className="num">{s.no}</span>
                          <span>
                            <b>{s.title}</b>
                            <small>{s.tagline}</small>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {res.projects.length > 0 && (
                <section className="search-ov__wide">
                  <h3 className="eyebrow">
                    {t.search.projects} · {res.projects.length}
                  </h3>
                  <ul>
                    {res.projects.slice(0, 6).map((p) => (
                      <li key={p.slug}>
                        <Link to={L.projects({ q: p.title })}>
                          <img src={p.image} alt="" loading="lazy" />
                          <span>
                            <b>{p.title}</b>
                            <small>
                              {categoryLabels[p.cat]}
                              {p.metric && ` · ${p.metric}`}
                            </small>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {res.projects.length > 6 && (
                    <Link to={L.projects({ q: q.trim() })} className="search-ov__more">
                      {t.search.allProjects(res.projects.length)} <ArrowRight size={16} />
                    </Link>
                  )}
                </section>
              )}
              {res.posts.length > 0 && (
                <section>
                  <h3 className="eyebrow">{t.search.news}</h3>
                  <ul>
                    {res.posts.map((p) => (
                      <li key={p.slug}>
                        <Link to={L.post(p.slug)}>
                          <span>
                            <b>{p.title}</b>
                            <small>{p.category}</small>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
