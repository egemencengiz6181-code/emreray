import type { Lang } from "../i18n/routes";

const months = {
  tr: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export function formatDate(iso: string, lang: Lang = "tr") {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  return {
    day,
    month: months[lang][d.getMonth()],
    year: d.getFullYear(),
    short: `${day}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`,
    long: d.toLocaleDateString(lang === "en" ? "en-GB" : "tr-TR", { day: "numeric", month: "long", year: "numeric" }),
  };
}

/** Türkçe karakterleri de doğru küçülterek arama için normalleştirir. */
export const norm = (s: string) =>
  s.toLocaleLowerCase("tr-TR").replace(/ı/g, "i").normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Faaliyet alanı görsellerinin 720 px'lik küçük sürümü (public/media/thumbs). */
export const thumb = (src: string) => src.replace("/media/", "/media/thumbs/");
