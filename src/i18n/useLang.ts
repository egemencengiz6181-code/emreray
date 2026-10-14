import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { langOf, links } from "./routes";
import { ui } from "./ui";

export function useLang() {
  const { pathname } = useLocation();
  return langOf(pathname);
}

/** Dil, link üreticileri ve arayüz metinleri tek seferde. */
export function useI18n() {
  const lang = useLang();
  return useMemo(() => ({ lang, L: links(lang), t: ui[lang] }), [lang]);
}
