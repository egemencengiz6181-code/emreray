import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useLang";
import { ease } from "./Motion";

type Choice = "all" | "essential" | null;
const KEY = "emreray-consent";

function read(): Choice {
  try {
    const v = localStorage.getItem(KEY);
    return v === "all" || v === "essential" ? v : null;
  } catch {
    return null;
  }
}

const Ctx = createContext<{ choice: Choice; set: (c: Choice) => void }>({ choice: null, set: () => {} });
export const useConsent = () => useContext(Ctx);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<Choice>(read);
  const set = useCallback((c: Choice) => {
    try {
      if (c) localStorage.setItem(KEY, c);
      else localStorage.removeItem(KEY);
    } catch {
      /* depolama kapalı olabilir */
    }
    setChoice(c);
  }, []);
  return <Ctx.Provider value={{ choice, set }}>{children}</Ctx.Provider>;
}

export function CookieBanner() {
  const { choice, set } = useConsent();
  const { t, L } = useI18n();
  return (
    <AnimatePresence>
      {choice === null && (
        <motion.aside
          className="cookie"
          aria-label={t.cookie.policy}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.6, ease, delay: 1.2 }}
        >
          <p>
            {t.cookie.text} <Link to={L.cookies()}>{t.cookie.policy}</Link>
          </p>
          <div className="cookie__actions">
            <button className="btn btn--ghost btn--sm" onClick={() => set("essential")}>
              {t.cookie.essential}
            </button>
            <button className="btn btn--signal btn--sm" onClick={() => set("all")}>
              {t.cookie.accept}
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

/** Üçüncü taraf iframe'leri yalnızca izin varsa (ya da kullanıcı isterse) yükler. */
export function ConsentFrame({ src, title }: { src: string; title: string }) {
  const { choice } = useConsent();
  const { t } = useI18n();
  const [force, setForce] = useState(false);
  if (choice === "all" || force) {
    return <iframe src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
  }
  return (
    <div className="frame-blocked">
      <p>{t.cookie.mapBlocked}</p>
      <button className="btn btn--ghost btn--sm" onClick={() => setForce(true)}>
        {t.cookie.loadMap}
      </button>
    </div>
  );
}
