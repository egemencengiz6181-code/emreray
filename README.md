# EMRERAY Web Sitesi

React 19 + TypeScript + Vite. Animasyonlar Framer Motion ile, akıcı kaydırma Lenis ile yapılıyor.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ klasörüne üretim çıktısı
```

## Dil desteği (TR / EN)

Türkçe sürüm kök adreste (`/projeler`), İngilizce sürüm `/en` altında (`/en/projects`).
Header'daki TR | EN geçişi bulunulan sayfanın diğer dildeki karşılığına götürür.

- Arayüz metinleri: `src/i18n/ui.ts` (TR ve EN aynı yapıda; EN eksik anahtar olursa TypeScript hata verir)
- URL eşlemeleri: `src/i18n/routes.ts`
- İngilizce içerik: `src/data/en/` (hizmetler, şirket bilgileri, 99 projenin çevirisi, yazılar, politikalar)

## İçerik nerede?

Tüm içerik `src/data/` altında; sayfa kodu değiştirilmeden buradan güncellenebilir.

| Dosya | İçerik |
| --- | --- |
| `site.ts` | İletişim, adresler, sosyal medya, rakamlar, sertifikalar, menü |
| `services.ts` | 6 faaliyet alanı (metin, kapsam, görseller) |
| `projects.generated.ts` | 99 proje (emreray.com'dan otomatik çıkarıldı) |
| `projects.ts` | Ana sayfa vitrinindeki projeler, filtre grupları |
| `news.ts` | Blog yazıları |
| `policies.ts` | POL-001 / POL-002 politika metinleri |
| `geo.ts` | Proje haritası: Türkiye sınırı, şehir koordinatları, projelerin geçtiği yerler |

Görseller `public/media/` altında, WebP formatında (en fazla 1920 px).

## Yayına alma

Bu bir tek sayfa uygulaması (SPA). Sunucu, bilinmeyen tüm adresleri `index.html`'e yönlendirmeli
(Netlify `_redirects`, Vercel `rewrites` veya Nginx `try_files $uri /index.html`).
Eski WordPress adresleri (`/hakkimizda`, `/sinyalizasyon` vb.) uygulama içinde yeni adreslere yönlendiriliyor.

## Yapılacaklar

- İletişim formu şu an kullanıcının e-posta uygulamasını açıyor. Bir form servisi bağlamak için
  `src/pages/Contact.tsx` içindeki `submit` fonksiyonunu değiştirmek yeterli.
- `public/media/hero.mp4` 15 MB; yayından önce sıkıştırılması önerilir
  (`ffmpeg -i hero.mp4 -vcodec libx264 -crf 28 -preset slow -an -vf scale=1920:-2 hero.mp4`).
