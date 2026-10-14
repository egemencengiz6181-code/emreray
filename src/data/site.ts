import type { ProjectCategory } from "./types";

export const company = {
  name: "EMRERAY",
  legal: "EMRERAY Enerji A.Ş.",
  founded: 1994,
  slogan: "Beklentileri Aşan Olağanüstü Hizmet.",
  motto: "EMRERAY daima “en üst takdire” hitap etmektedir, edecektir.",
  summary:
    "EMRERAY taşıdığı üstün hizmet sorumluluğu ile dün olduğu gibi bugün de kalite ilkesinden ödün vermeden ilerlemeye devam etmektedir.",
};

export const contact = {
  phone: "(0312) 473 71 51",
  phoneHref: "tel:+903124737151",
  email: "info@emreray.com",
  careerEmail: "ik@emreray.com",
  offices: [
    {
      title: "Genel Müdürlük",
      address: "Kızılırmak Mah., Ufuk Üniversitesi Cd. No: 8/35, Çukurambar, 06510 Çankaya / Ankara",
      map: "https://www.google.com/maps?q=Ufuk+%C3%9Cniversitesi+Cd.+No:8+%C3%87ukurambar+%C3%87ankaya+Ankara&output=embed",
      link: "https://www.google.com/maps/search/?api=1&query=Ufuk+%C3%9Cniversitesi+Cd.+No%3A8+%C3%87ukurambar+%C3%87ankaya+Ankara",
    },
    {
      title: "Emreray Enerji",
      address: "Balgat, Ceyhun Atuf Kansu Cd., 06520 Çankaya / Ankara",
      map: "https://www.google.com/maps?q=Ceyhun+Atuf+Kansu+Cd.+Balgat+%C3%87ankaya+Ankara&output=embed",
      link: "https://www.google.com/maps/search/?api=1&query=Ceyhun+Atuf+Kansu+Cd.+Balgat+%C3%87ankaya+Ankara",
    },
  ],
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/emre-ray-enerji" },
    { name: "Instagram", href: "https://www.instagram.com/emreray_enerji/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=479844478782020" },
  ],
};

export const stats = [
  { value: 2679, suffix: "km", label: "Konvansiyonel hat elektrifikasyonu" },
  { value: 811, suffix: "km", label: "Yüksek hızlı tren hattı elektrifikasyonu" },
  { value: 600, suffix: "MVA", label: "Kurulu güç — enerji iletimi ve dağıtımı" },
  { value: 80, prefix: "%", label: "Elektrifikasyon inşaat işlerinde pazar payı" },
  { value: 26000, suffix: "m²", label: "2 fabrikada kapalı üretim alanı" },
  { value: 1994, label: "Kuruluş yılı", plain: true },
];

export const certifications = [
  { code: "ISO 9001:2015", name: "Kalite Yönetim Sistemi", note: "TÜV NORD CERT · 11.05.2004" },
  { code: "ISO 14001:2015", name: "Çevre Yönetim Sistemi", note: "TÜV AUSTRIA · 10.11.2008" },
  { code: "ISO 45001:2018", name: "İş Sağlığı ve Güvenliği", note: "OHSAS 18001'in devamı" },
];

export const values = [
  {
    title: "Yüksek Teknoloji",
    text: "Hızla değişen teknolojinin dinamiklerini yakından takip ediyor, her projeye son teknoloji çözümler taşıyoruz.",
  },
  {
    title: "Yüksek Kalite",
    text: "Ölçü olarak dünya standartlarını baz alıyor, entegre yönetim sistemiyle kaliteyi her aşamada belgeliyoruz.",
  },
  {
    title: "Yüksek Memnuniyet",
    text: "Şeffaf, dinamik, insan ve çevre ilişkileri güçlü, güvenilir ve ileri görüşlü bir çizgide hizmet veriyoruz.",
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  yht: "Yüksek Hızlı Tren",
  konvansiyonel: "Konvansiyonel Hatlar",
  sinyalizasyon: "Sinyalizasyon",
  "hafif-rayli": "Hafif Raylı Sistemler",
  altyapi: "Altyapı / Üstyapı",
  "enerji-uretim": "Elektrik Üretim",
  "enerji-dagitim": "Enerji Dağıtımı",
  trafo: "Trafo Merkezleri",
  insaat: "İnşaat İşleri",
  malzeme: "Malzeme Temini",
};

export const nav = [
  {
    label: "Kurumsal",
    to: "/kurumsal",
    children: [
      { label: "Hakkımızda", to: "/kurumsal" },
      { label: "Kalite Politikası", to: "/kurumsal/kalite-politikasi" },
      { label: "Çevre ve İSG Politikası", to: "/kurumsal/cevre-ve-isg-politikasi" },
    ],
  },
  { label: "Faaliyet Alanları", to: "/faaliyet-alanlari", mega: true },
  {
    label: "Projeler",
    to: "/projeler",
    children: [
      { label: "Tamamlanan Projeler", to: "/projeler" },
      { label: "Devam Eden Projeler", to: "/projeler?durum=devam-eden" },
    ],
  },
  { label: "Haberler", to: "/haberler" },
  { label: "İletişim", to: "/iletisim" },
];
