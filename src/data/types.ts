export type ServiceSlug =
  | "ana-hat"
  | "hafif-rayli"
  | "sinyalizasyon"
  | "enerji"
  | "insaat"
  | "malzeme";

export type ProjectCategory =
  | "yht"
  | "konvansiyonel"
  | "sinyalizasyon"
  | "hafif-rayli"
  | "altyapi"
  | "enerji-uretim"
  | "enerji-dagitim"
  | "trafo"
  | "insaat"
  | "malzeme";

export interface Project {
  slug: string;
  title: string;
  desc: string;
  cat: ProjectCategory;
  service: ServiceSlug;
  status: "done" | "ongoing";
  metric: string | null;
  image: string;
}

export interface Service {
  slug: ServiceSlug;
  no: string;
  title: string;
  short: string;
  tagline: string;
  lead: string;
  body: string[];
  highlight: { title: string; text: string };
  scope: string[];
  hero: string;
  gallery: string[];
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  blocks: { type: "p" | "h2" | "h3"; text: string }[];
}
