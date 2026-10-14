import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { useLang } from "../i18n/useLang";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </M>
  );
}

/** Başlığı satır satır maskeyle yukarı kaydırarak gösterir. */
export function LineReveal({ lines, className, delay = 0 }: { lines: ReactNode[]; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  // Gözlemlenen eleman maskesiz dış kapsayıcı olmalı; maskelenen iç satır
  // IntersectionObserver'da hiçbir zaman "görünür" sayılmaz.
  return (
    <motion.span
      className={className}
      style={{ display: "block" }}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -5% 0px" }}
    >
      {lines.map((l, i) => (
        <span className="line" key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
          <motion.span
            style={{ display: "block" }}
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 1.1, ease, delay: delay + i * 0.09 }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Counter({ to, duration = 2.2, format = true }: { to: number; duration?: number; format?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const mv = useMotionValue(0);
  const locale = useLang() === "en" ? "en-GB" : "tr-TR";
  const text = useTransform(mv, (v) => (format ? Math.round(v).toLocaleString(locale) : String(Math.round(v))));
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(to);
      return;
    }
    const c = animate(mv, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => c.stop();
  }, [inView, to, duration, mv, reduce]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

/** Görsele hafif paralaks verir; kapsayıcı overflow:hidden olmalı. */
export function Parallax({ children, amount = 60, className }: { children: ReactNode; amount?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    const tick = () => {
      const el = ref.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        if (r.bottom > 0 && r.top < vh) {
          const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
          y.set(-p * amount);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [amount, y, reduce]);

  return (
    <motion.div ref={ref} className={className} style={{ y, height: "100%" }}>
      {children}
    </motion.div>
  );
}
