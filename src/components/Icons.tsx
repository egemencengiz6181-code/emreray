import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
});

export const ArrowRight = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);
export const ArrowLeft = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M20 12H4M10 6l-6 6 6 6" />
  </svg>
);
export const ArrowUpRight = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const ArrowUp = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 20V4M6 10l6-6 6 6" />
  </svg>
);
export const ChevronDown = ({ size = 14, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const Close = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const Search = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const Play = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M7 5v14l12-7z" fill="currentColor" />
  </svg>
);
export const Pause = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M8 5v14M16 5v14" strokeWidth={2.4} />
  </svg>
);
export const Phone = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);
export const Mail = ({ size, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const LinkedIn = ({ size = 18, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4z" />
  </svg>
);
export const Instagram = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);
export const Facebook = ({ size = 18, ...p }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.27 4.3c-2.3 0-3.87 1.4-3.87 3.98v2.22H7.8v3h2.6V21z" />
  </svg>
);

export const socialIcon = { LinkedIn, Instagram, Facebook } as const;

/* Faaliyet alanı ikonları — ince çizgi, teknik */
export const AreaIcon = ({ name, size = 28 }: { name: string; size?: number }) => {
  const p = base(size);
  switch (name) {
    case "ana-hat":
      return (
        <svg {...p}>
          <path d="M8 3 5 21M16 3l3 18M6.5 8h11M6 13h12M5.3 18h13.4" />
        </svg>
      );
    case "hafif-rayli":
      return (
        <svg {...p}>
          <path d="M9 2h6M12 2v3" />
          <rect x="5" y="5" width="14" height="12" rx="3" />
          <path d="M5 11h14M9 17l-2 4M15 17l2 4M9 14h.01M15 14h.01" />
        </svg>
      );
    case "sinyalizasyon":
      return (
        <svg {...p}>
          <rect x="8" y="2" width="8" height="14" rx="4" />
          <circle cx="12" cy="6" r="1.4" />
          <circle cx="12" cy="12" r="1.4" />
          <path d="M12 16v6M8 22h8" />
        </svg>
      );
    case "enerji":
      return (
        <svg {...p}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case "insaat":
      return (
        <svg {...p}>
          <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z" />
          <path d="M3 7.5 12 12l9-4.5M12 12v9" />
        </svg>
      );
  }
};
