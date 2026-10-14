import { AnimatePresence, motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoStacked } from "./Logo";
import { ease } from "./Motion";

const KEY = "emreray-preloaded";

function shouldShow() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    return !sessionStorage.getItem(KEY);
  } catch {
    return false;
  }
}

/** Oturumdaki ilk ziyarette kısa bir açılış — logo çizgileri ve yüzde sayacı. */
export function Preloader() {
  const [show, setShow] = useState(shouldShow);
  const p = useMotionValue(0);
  const pct = useTransform(p, (v) => String(Math.round(v)).padStart(3, "0"));
  const scale = useTransform(p, (v) => v / 100);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const c = animate(p, 100, {
      duration: 1.6,
      ease: [0.65, 0, 0.35, 1],
      onComplete: () => {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {
          /* depolama kapalı olabilir */
        }
        setTimeout(() => setShow(false), 200);
      },
    });
    return () => {
      c.stop();
      document.body.style.overflow = "";
    };
  }, [show, p]);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="preloader__inner">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              style={{ width: 200 }}
            >
              <LogoStacked />
            </motion.div>
            <div className="preloader__bar">
              <motion.i style={{ scaleX: scale }} />
            </div>
            <motion.span className="preloader__count">{pct}</motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
