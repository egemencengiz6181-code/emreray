/**
 * EMRERAY logosu — "Go ahead" sloganlı yeni kurumsal logo.
 * Şeffaf PNG'ler: lacivert/çelik mavisi (açık zemin) ve beyaz/açık mavi (koyu zemin).
 */

const SRC = "/media/brand";

/** Header logosu — zemine göre açık/koyu sürüm CSS ile değişir; `tagline` ile "Go ahead" sloganı eklenir. */
export function LogoHorizontal({ className, tagline = false }: { className?: string; tagline?: boolean }) {
  const name = tagline ? "logo" : "logo-compact";
  const h = tagline ? 495 : 344;
  return (
    <span className={["logo-swap", tagline && "logo-swap--tagline", className].filter(Boolean).join(" ")}>
      <img className="logo-swap__light" src={`${SRC}/${name}-light.png`} alt="EMRERAY" width={1097} height={h} />
      <img className="logo-swap__dark" src={`${SRC}/${name}.png`} alt="" aria-hidden="true" width={1097} height={h} />
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
