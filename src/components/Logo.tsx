/**
 * EMRERAY logosu — "Go ahead" sloganlı yeni kurumsal logo.
 * Şeffaf PNG'ler: lacivert/çelik mavisi (açık zemin) ve beyaz/açık mavi (koyu zemin).
 */

const SRC = "/media/brand";

/** Header logosu — sloganlı tam logo; zemine göre açık/koyu sürüm CSS ile değişir. */
export function LogoHorizontal({ className }: { className?: string }) {
  return (
    <span className={["logo-swap", className].filter(Boolean).join(" ")}>
      <img className="logo-swap__light" src={`${SRC}/logo-light.png`} alt="EMRERAY — Go ahead" width={1097} height={495} />
      <img className="logo-swap__dark" src={`${SRC}/logo.png`} alt="" aria-hidden="true" width={1097} height={495} />
    </span>
  );
}

/** Sloganlı tam logo — koyu zeminler (footer, preloader) için. */
export function LogoStacked({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <img
      className={className}
      src={`${SRC}/${tone === "light" ? "logo-light" : "logo"}.png`}
      alt="EMRERAY — Go ahead"
      width={1097}
      height={495}
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  );
}
