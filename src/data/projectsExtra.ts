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
    desc: "Akçaray tramvay ağının Alikahya Stadyum hattının Kartepe'ye 1,4 km uzatılması; ray üstyapı, katener ve durak işleri. Dumlupınar ve Kartepe duraklarıyla ağ 18,7 km'ye ve 29 durağa ulaştı; mevcut hattaki 15 istasyonda peronlar çift dizi işletmeye göre uzatıldı (tek seferde 600 yolcu).",
    cat: "hafif-rayli",
    service: "hafif-rayli",
    status: "done",
    metric: "1,4 km",
    image: alikahyaGallery[0].src,
    gallery: alikahyaGallery,
    location: "İzmit – Kartepe, Kocaeli",
    employer: "Kocaeli Büyükşehir Belediyesi",
    contractor: "Sigma İnş. ve Turz. İşl. Tic. A.Ş. – Emreray Enerji İnş. San. ve Tic. A.Ş. Adi Ortaklığı",
  },
  {
    slug: "kurucesme-tramvay-hatti",
    title: "Kuruçeşme Tramvay Hattı",
    desc: "Tramvay hattı yapım işi",
    cat: "hafif-rayli",
    service: "hafif-rayli",
    status: "done",
    metric: null,
    image: "/media/2024-12-20231005-izmit-kurucesme-tramvay-hatti-projesi-591277-ab1b25532a402c53fa7b.webp",
    location: "Kuruçeşme, İzmit – Kocaeli",
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

/** 14.11.2026: Devam Eden Projeler listesinin başına eklenir. */
export const ongoingNewProjects: Project[] = [
  {
    slug: "elazig-genc-elektrifikasyon-sistemleri",
    title: "Elazığ – Genç Elektrifikasyon Sistemleri Yapım İşi",
    desc: "133 km'lik hat kesiminin elektrifikasyon sistemlerinin temini, montajı ve devreye alınması.",
    cat: "konvansiyonel",
    service: "ana-hat",
    status: "ongoing",
    metric: "133 km",
    image: `${dir}/elazig-genc-elektrifikasyon-sistemleri/elazig-genc-01-portal-direkleri-ve-katener.webp`,
    location: "Elazığ – Bingöl (Genç)",
    employer: "TCDD Genel Müdürlüğü",
    // Saha surveyinden sonra yapılan saha imalatları (16.11.2026).
    gallery: g("elazig-genc-elektrifikasyon-sistemleri", [
      ["elazig-genc-01-portal-direkleri-ve-katener", "Saha imalatları — portal direkleri ve katener traversleri"],
      ["elazig-genc-02-tunel-cikisinda-katener-araci", "Saha imalatları — tünel çıkışında EMRERAY katener aracı"],
      ["elazig-genc-03-trafo-kosku-montaji-ve-tunel", "Saha imalatları — trafo köşkü yerleştirme ve tünel ağzı"],
      ["elazig-genc-04-tunel-agzinda-beton-dokumu", "Saha imalatları — tünel ağzında raylı mikserle beton dökümü"],
      ["elazig-genc-05-direk-temeli-ankraj-bulonlari", "Saha imalatları — hat kenarında direk temeli ve ankraj bulonları"],
      ["elazig-genc-06-tunel-yaklasiminda-katener-araci", "Saha imalatları — tünel yaklaşımında temel betonu dökümü"],
      ["elazig-genc-07-kafes-katener-direkleri", "Saha imalatları — kafes katener direkleri"],
    ]),
  },
  {
    slug: "misir-yuksek-hizli-demiryolu-yesil-hat-katener",
    title: "Mısır Yüksek Hızlı Demiryolu Yeşil Hat – Katener (OCS) Montaj İşleri",
    desc: "Yeşil Hat'ın 512 km'lik kesiminde katener sisteminin montajı. 660 km uzunluğundaki ve 21 istasyonlu Yeşil Hat, Kızıldeniz kıyısındaki Ain Sokhna'dan Akdeniz kıyısında İskenderiye ve Marsa Matruh'a uzanıyor; hatta 250 km/s hızlı trenler çalışacak.",
    cat: "yht",
    service: "ana-hat",
    status: "ongoing",
    metric: "512 km",
    image: "/media/2025-01-sy-enerji-fotograflar-temelli-ankara-2008-69-scaled.webp",
    location: "Mısır",
    employer: "Mısır Ulusal Tüneller İdaresi (NAT) projesi",
  },
  {
    slug: "tiflis-tramvay-hatti-didi-digomi-didube",
    title: "Tiflis Tramvay Hattı (Didi Digomi – Didube) Tasarım ve Yapım İşi",
    desc: "Didi Digomi'nin 3. ve 4. mikro bölgelerinden başlayıp Didube metro istasyonuna bağlanan yaklaşık 7,5 km, 11 duraklı tramvay hattı. İş konsept tasarım, detay mühendislik ve inşaat olmak üzere üç aşamada yürüyor; kapsamdaki depo 11 tramvay aracına bakım verecek. Sözleşme 7 Eylül 2026'da imzalandı.",
    cat: "hafif-rayli",
    service: "hafif-rayli",
    status: "ongoing",
    metric: "7,5 km",
    image: "/media/2025-04-wa-2025-04-08-at-15-37-30.webp",
    location: "Tiflis, Gürcistan",
    employer: "Tbilisi Transport Company (TTC)",
  },
  {
    slug: "open-net-gurcistan-fiber-optik-altyapi-faz-4",
    title: "Open Net Gürcistan Fiber Optik Altyapı Projesi (Faz 4)",
    desc: "250 km fiber optik pasif altyapının inşaat işleri. Program yaklaşık 1.000 uzak kırsal yerleşimi bölgesel fiber ağa bağlamayı hedefliyor; ağ, operatörlere yalnızca toptan hizmet veren açık erişimli bir altyapı olarak işletilecek.",
    cat: "altyapi",
    service: "insaat",
    status: "ongoing",
    metric: "250 km",
    image: "/media/2025-01-20160504-101310-1-scaled.webp",
    location: "Tsalka – Akhalkalaki – Akhaltsikhe, Gürcistan",
    employer: "Open Net (Dünya Bankası / EIB finansmanı)",
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
