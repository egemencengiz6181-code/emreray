import { useMemo } from "react";
import { postsEn, postSlugMap } from "../data/en/news";
import { policiesEn, policySlugMap } from "../data/en/policies";
import { projectsTextEn } from "../data/en/projectsText";
import { servicesEn } from "../data/en/services";
import { categoryLabelsEn, certificationsEn, companyEn, filterLabelsEn, officeTitlesEn, statsEn, valuesEn } from "../data/en/site";
import { posts } from "../data/news";
import { policies } from "../data/policies";
import { featuredSlugs, filterGroups, projects } from "../data/projects";
import { services } from "../data/services";
import { categoryLabels, certifications, company, contact, stats, values } from "../data/site";
import type { Project } from "../data/types";
import type { Lang } from "./routes";
import { useLang } from "./useLang";

const invert = (m: Record<string, string>) => Object.fromEntries(Object.entries(m).map(([k, v]) => [v, k]));
const postIdFromEn = invert(postSlugMap);
const policyIdFromEn = invert(policySlugMap);

/** İçerikte `slug` her iki dilde de iç kimliktir (Türkçe slug); URL çevirisi routes.ts'de yapılır. */
function build(lang: Lang) {
  if (lang === "tr") {
    const done = projects.filter((p) => p.status === "done");
    return {
      company,
      contact,
      stats,
      certifications,
      values,
      categoryLabels,
      filterGroups,
      services,
      posts,
      policies,
      projects,
      completed: done,
      ongoing: projects.filter((p) => p.status === "ongoing"),
      featured: featuredSlugs.map((s) => projects.find((p) => p.slug === s)).filter(Boolean) as Project[],
    };
  }
  const proj: Project[] = projects.map((p) => {
    const t = projectsTextEn[p.slug];
    if (!t) return p;
    return {
      ...p,
      title: t.title,
      desc: t.desc,
      metric: t.metric,
      location: t.location ?? p.location,
      period: t.period ?? p.period,
      gallery: p.gallery?.map((g, i) => ({ ...g, caption: t.captions?.[i] ?? g.caption })),
    };
  });
  return {
    company: { ...company, ...companyEn },
    contact: { ...contact, offices: contact.offices.map((o, i) => ({ ...o, title: officeTitlesEn[i] ?? o.title })) },
    stats: statsEn,
    certifications: certificationsEn,
    values: valuesEn,
    categoryLabels: categoryLabelsEn,
    filterGroups: filterGroups.map((g) => ({ ...g, label: filterLabelsEn[g.key] ?? g.label })),
    services: servicesEn,
    posts: postsEn.map((p) => ({ ...p, slug: postIdFromEn[p.slug] ?? p.slug })),
    policies: policiesEn.map((p) => ({ ...p, slug: policyIdFromEn[p.slug] ?? p.slug })),
    projects: proj,
    completed: proj.filter((p) => p.status === "done"),
    ongoing: proj.filter((p) => p.status === "ongoing"),
    featured: featuredSlugs.map((s) => proj.find((p) => p.slug === s)).filter(Boolean) as Project[],
  };
}

const cache = { tr: build("tr"), en: build("en") };
export type Content = ReturnType<typeof build>;

export function useContent(): Content {
  const lang = useLang();
  return useMemo(() => cache[lang], [lang]);
}
