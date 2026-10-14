import { useEffect } from "react";
import { useLang } from "../i18n/useLang";
import { ui } from "../i18n/ui";

export function useTitle(title?: string, description?: string) {
  const lang = useLang();
  useEffect(() => {
    const m = ui[lang].meta;
    document.documentElement.lang = lang;
    document.title = title ? `${title} — ${m.base}` : m.homeTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description ?? m.description);
  }, [title, description, lang]);
}
