/**
 * EMRERAY logosu — emreray.com'daki PNG'den vektöre yeniden çizildi.
 * Amblem: "E ═ Ǝ" — iki E arasında üç ray çizgisi.
 */

function Emblem({ x = 0, y = 0, s = 1 }: { x?: number; y?: number; s?: number }) {
  const h = 12 * s;
  const g = 8 * s;
  const rows = [0, h + g, 2 * (h + g)].map((r) => y + r);
  return (
    <g fill="currentColor">
      <rect x={x} y={y} width={h} height={3 * h + 2 * g} />
      {rows.map((ry) => (
        <rect key={`l${ry}`} x={x} y={ry} width={40 * s} height={h} />
      ))}
      {rows.map((ry) => (
        <rect key={`m${ry}`} x={x + 48 * s} y={ry} width={104 * s} height={h} />
      ))}
      <rect x={x + 188 * s} y={y} width={h} height={3 * h + 2 * g} />
      {rows.map((ry) => (
        <rect key={`r${ry}`} x={x + 160 * s} y={ry} width={40 * s} height={h} />
      ))}
    </g>
  );
}

const wordStyle = {
  fontFamily: 'Geist, system-ui, sans-serif',
  fontWeight: 500,
} as const;

export function LogoHorizontal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 470 64" role="img" aria-label="EMRERAY">
      <Emblem s={0.82} y={10.6} />
      <text x="190" y="47" fontSize="40" letterSpacing="9" fill="currentColor" style={wordStyle}>
        EMRERΛY
      </text>
    </svg>
  );
}

export function LogoStacked({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 260 132" role="img" aria-label="EMRERAY">
      <Emblem x={30} />
      <text
        x="130"
        y="124"
        fontSize="38"
        letterSpacing="11"
        textAnchor="middle"
        fill="currentColor"
        style={wordStyle}
      >
        EMRERΛY
      </text>
    </svg>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 52" aria-hidden="true">
      <Emblem />
    </svg>
  );
}
