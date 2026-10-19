// 16.10.2026 revizyonu (EMRERAY_Web_Revizyon_2026-10-16) ile eklenen / güncellenen projeler.
// İşveren, rol, yıl gibi EMRERAY tarafından henüz teyit edilmemiş alanlar bilerek boş bırakıldı.
import type { Project } from "./types";

const dir = "/media/projeler";
const g = (folder: string, items: [string, string][]) =>
  items.map(([file, caption]) => ({ src: `${dir}/${folder}/${file}.webp`, caption }));

export const alikahyaSlug = "alikahya-stadyum-tramvay-hatti";

export const alikahyaGallery = g("alikahya-stadyum-tramvay-hatti", [
  ["alikahya-01-kartepe-hatti-sonbahar", "Alikahya Stadyum Tramvay Hattı — Kartepe güzergâhı"],
  ["alikahya-02-kartepe-hatti-genel-gorunum", "Kartepe tramvay hattı — genel görünüm"],
  ["alikahya-03-kartepe-acilis-seferi", "Kartepe hattı açılış seferi"],
]);

/** Tamamlanan Projeler listesinin başına eklenir (en yeni üstte). */
export const newProjects: Project[] = [
  {
    slug: alikahyaSlug,
    title: "Alikahya Stadyum Tramvay Hattı Yapım İşi",
    desc: "Tramvay hattı yapım işi — Sigma – Emreray Adi Ortaklığı",
    cat: "hafif-rayli",
    service: "hafif-rayli",
    status: "done",
    metric: null,
    image: alikahyaGallery[0].src,
    gallery: alikahyaGallery,
    location: "Alikahya – Kartepe, Kocaeli",
    contractor: "Sigma İnş. ve Turz. İşl. Tic. A.Ş. – Emreray Enerji İnş. San. ve Tic. A.Ş. Adi Ortaklığı",
  },
  {
    slug: "eskisehir-tramvay-deposu-insaati",
    title: "Eskişehir Tramvay Deposu İnşaatı",
    desc: "Depo bakım holü ve idari bina inşaatı; çelik çatı sistemi; bakım kanalları ve çatı bakım platformları; depo sahası hatları ve katener sistemi",
    cat: "hafif-rayli",
    service: "hafif-rayli",
    status: "done",
    metric: null,
    image: `${dir}/eskisehir-tramvay-deposu/eskisehir-07-depo-sahasi-katener-ve-tramvaylar.webp`,
    location: "Eskişehir",
    gallery: g("eskisehir-tramvay-deposu", [
      ["eskisehir-01-depo-celik-cati-montaji", "Bakım holü çelik çatı montajı"],
      ["eskisehir-02-idari-bina-ve-bakim-holu-kaba-insaat", "İdari bina ve bakım holü — kaba inşaat"],
      ["eskisehir-03-bakim-holu-kolon-ve-cati-sistemi", "Bakım holü kolonları ve çatı sistemi"],
      ["eskisehir-04-idari-bina-betonarme-cerceve", "İdari bina betonarme taşıyıcı sistemi"],
      ["eskisehir-05-idari-bina-cephe-ve-katener", "İdari bina cephe uygulaması ve katener hattı"],
      ["eskisehir-06-bakim-holu-giris-kapilari-ve-depo-hatlari", "Bakım holü giriş kapıları ve depo hatları"],
      ["eskisehir-07-depo-sahasi-katener-ve-tramvaylar", "Depo sahası — katener sistemi ve tramvaylar"],
      ["eskisehir-08-bakim-holu-ic-platformlar", "Bakım holü iç görünüş — çatı bakım platformları"],
      ["eskisehir-09-cati-bakim-platformlari", "Çatı bakım platformu ve bakım hattı"],
      ["eskisehir-10-bakim-kanali-ve-platformlar", "Bakım kanalı ve platformlar"],
      ["eskisehir-11-bakim-holunde-tramvay", "Bakım holünde tramvay"],
      ["eskisehir-12-bakim-holu-tramvay-on-gorunum", "Bakım holü — tramvay ön görünüş"],
    ]),
  },
  {
    slug: "ibb-tramvay-deposu",
    title: "İBB Tramvay Deposu",
    desc: "",
    cat: "hafif-rayli",
    service: "hafif-rayli",
    status: "done",
    metric: null,
    image: `${dir}/ibb-tramvay-deposu/ibb-tramvay-deposu-01-bina-cephesi-ve-depo-hatlari.webp`,
    location: "İstanbul",
    employer: "İstanbul Büyükşehir Belediyesi (İBB)",
    gallery: g("ibb-tramvay-deposu", [
      ["ibb-tramvay-deposu-01-bina-cephesi-ve-depo-hatlari", "İBB Tramvay Deposu — bina cephesi ve depo hatları"],
    ]),
  },
];

/** Mevcut kayıtlara eklenen görsel / bilgi güncellemeleri. */
export const projectPatches: Record<string, Partial<Project>> = {
  // Belgedeki "İzmir Halkapınar İstasyonu Yapım İşi" sitede bu kayıt olarak zaten var.
  "izmir-metrosu-isi-kapsaminda-tcdd-halkapinar-istasyon-binasi-insaati": {
    image: `${dir}/izmir-halkapinar-istasyonu/izmir-halkapinar-gar-binasi.webp`,
    location: "Halkapınar, İzmir",
    gallery: g("izmir-halkapinar-istasyonu", [["izmir-halkapinar-gar-binasi", "İzmir Halkapınar Gar Binası"]]),
  },
};
