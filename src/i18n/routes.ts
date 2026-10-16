import type { ServiceSlug } from "../data/types";

export type Lang = "tr" | "en";

/** Hizmetlerin İngilizce URL karşılıkları. İç kimlik her zaman Türkçe slug'dır. */
const serviceEn: Record<ServiceSlug, string> = {
  "ana-hat": "mainline-railways",
  "hafif-rayli": "light-rail",
  sinyalizasyon: "signalling",
  enerji: "energy",
  insaat: "construction",
  malzeme: "materials",
};

const policyEn: Record<string, string> = {
  "kalite-politikasi": "quality-policy",
  "cevre-ve-isg-politikasi": "environment-ohs-policy",
};

const postEn: Record<string, string> = {
  "demiryolu-sinyalizasyon-sistemlerinin-guvenlikteki-rolu": "role-of-railway-signalling-systems-in-safety",
  "elektrifikasyonun-demiryolu-tasimaciligina-etkisi": "impact-of-electrification-on-rail-transport",
  "demiryolu-altyapisinin-onemi-ve-gelecekteki-yatirimlar": "importance-of-railway-infrastructure-and-future-investments",
};

const invert = (m: Record<string, string>) => Object.fromEntries(Object.entries(m).map(([k, v]) => [v, k]));
const serviceFromEn = invert(serviceEn);
const policyFromEn = invert(policyEn);
const postFromEn = invert(postEn);

const seg = {
  tr: {
    about: "kurumsal",
    services: "faaliyet-alanlari",
    projects: "projeler",
    news: "haberler",
    contact: "iletisim",
    sustainability: "surdurulebilirlik",
    cookies: "cerez-politikasi",
  },
  en: {
    about: "about",
    services: "services",
    projects: "projects",
    news: "news",
    contact: "contact",
    sustainability: "sustainability",
    cookies: "cookie-policy",
  },
} as const;

/** Proje sayfası sorgu parametreleri, dile göre. */
export const projectQuery = {
  tr: { status: "durum", ongoing: "devam-eden", category: "kategori", area: "alan", q: "ara", project: "proje" },
  en: { status: "status", ongoing: "ongoing", category: "category", area: "area", q: "q", project: "project" },
} as const;

export function links(lang: Lang) {
  const s = seg[lang];
  const pre = lang === "en" ? "/en" : "";
  const qp = projectQuery[lang];
  return {
    home: () => (lang === "en" ? "/en" : "/"),
    about: () => `${pre}/${s.about}`,
    policy: (id: string) => `${pre}/${s.about}/${lang === "en" ? policyEn[id] ?? id : id}`,
    services: () => `${pre}/${s.services}`,
    service: (id: ServiceSlug) => `${pre}/${s.services}/${lang === "en" ? serviceEn[id] : id}`,
    projects: (o: { ongoing?: boolean; category?: string; area?: ServiceSlug; q?: string; project?: string } = {}) => {
      const p = new URLSearchParams();
      if (o.ongoing) p.set(qp.status, qp.ongoing);
      if (o.category) p.set(qp.category, o.category);
      if (o.area) p.set(qp.area, o.area);
      if (o.q) p.set(qp.q, o.q);
      if (o.project) p.set(qp.project, o.project);
      const qs = p.toString();
      return `${pre}/${s.projects}${qs ? `?${qs}` : ""}`;
    },
    news: () => `${pre}/${s.news}`,
    post: (id: string) => `${pre}/${s.news}/${lang === "en" ? postEn[id] ?? id : id}`,
    contact: () => `${pre}/${s.contact}`,
    sustainability: () => `${pre}/${s.sustainability}`,
    cookies: () => `${pre}/${s.cookies}`,
  };
}

export type Links = ReturnType<typeof links>;

/** URL parametresinden iç kimliğe çevirir. */
export const resolveId = {
  service: (lang: Lang, slug?: string) => (lang === "en" ? serviceFromEn[slug ?? ""] : slug) as ServiceSlug | undefined,
  policy: (lang: Lang, slug?: string) => (lang === "en" ? policyFromEn[slug ?? ""] : slug),
  post: (lang: Lang, slug?: string) => (lang === "en" ? postFromEn[slug ?? ""] : slug),
};

export const langOf = (pathname: string): Lang => (pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr");

/** Bulunulan sayfanın diğer dildeki karşılığını üretir. */
export function switchPath(pathname: string, search: string, to: Lang): string {
  const from = langOf(pathname);
  if (from === to) return pathname + search;
  const parts = pathname.replace(/^\/en(?=\/|$)/, "").split("/").filter(Boolean);
  const L = links(to);
  const key = (Object.keys(seg[from]) as (keyof (typeof seg)["tr"])[]).find((k) => seg[from][k] === parts[0]);
  const id = parts[1];

  let out = L.home();
  switch (key) {
    case "about":
      out = id ? L.policy(resolveId.policy(from, id) ?? "") : L.about();
      break;
    case "services": {
      const sid = resolveId.service(from, id);
      out = sid ? L.service(sid) : L.services();
      break;
    }
    case "projects": {
      const q = new URLSearchParams(search);
      const a = projectQuery[from];
      out = L.projects({
        ongoing: q.get(a.status) === a.ongoing,
        category: q.get(a.category) ?? undefined,
        area: (q.get(a.area) as ServiceSlug) ?? undefined,
        q: q.get(a.q) ?? undefined,
      });
      return out;
    }
    case "news": {
      const pid = resolveId.post(from, id);
      out = pid ? L.post(pid) : L.news();
      break;
    }
    case "contact":
      out = L.contact();
      break;
    case "sustainability":
      out = L.sustainability();
      break;
    case "cookies":
      out = L.cookies();
      break;
  }
  return out;
}
