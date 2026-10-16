import { projects as generated } from "./projects.generated";
import { newProjects, projectPatches } from "./projectsExtra";
import type { Project, ProjectCategory, ServiceSlug } from "./types";

export const projects: Project[] = [
  ...newProjects,
  ...generated.map((p) => (projectPatches[p.slug] ? { ...p, ...projectPatches[p.slug] } : p)),
];

export const completedProjects = projects.filter((p) => p.status === "done");
export const ongoingProjects = projects.filter((p) => p.status === "ongoing");

export const projectsByService = (s: ServiceSlug) => completedProjects.filter((p) => p.service === s);

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug);

/** Ana sayfa vitrini için elle seçilmiş, görsel olarak güçlü projeler. */
export const featuredSlugs = [
  "alikahya-stadyum-tramvay-hatti",
  "ankara-istanbul-hizli-tren-1-asama",
  "antalya-hafif-rayli-sistem-1-asama",
  "kayseri-bogazkopru-ulukisla-yenice-adana-toprakkale-hat-kesimine",
  "kosekoy-pamukova-hat-kesimine",
  "154-36-kv-horasan-trafo-merkezi-yapim-isi-50-mva",
  "kadikoy-moda-nostaljik-tramvay-hatti",
  "izmir-alsancak-cumaovasi-basmane-menemen-aliaga",
  "eskisehir-hafif-rayli-sistem-projesi",
];

export const featuredProjects = featuredSlugs
  .map((s) => projects.find((p) => p.slug === s))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export const filterGroups: { key: "all" | ProjectCategory | "enerji"; label: string; match: (c: ProjectCategory) => boolean }[] = [
  { key: "all", label: "Tümü", match: () => true },
  { key: "yht", label: "Yüksek Hızlı Tren", match: (c) => c === "yht" },
  { key: "konvansiyonel", label: "Konvansiyonel Hatlar", match: (c) => c === "konvansiyonel" },
  { key: "sinyalizasyon", label: "Sinyalizasyon", match: (c) => c === "sinyalizasyon" },
  { key: "hafif-rayli", label: "Hafif Raylı", match: (c) => c === "hafif-rayli" },
  { key: "altyapi", label: "Altyapı / Üstyapı", match: (c) => c === "altyapi" },
  { key: "enerji", label: "Enerji", match: (c) => c.startsWith("enerji") || c === "trafo" },
  { key: "insaat", label: "İnşaat", match: (c) => c === "insaat" },
  { key: "malzeme", label: "Malzeme", match: (c) => c === "malzeme" },
];
