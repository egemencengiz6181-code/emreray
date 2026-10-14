import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ConsentProvider, CookieBanner } from "./components/Consent";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ease } from "./components/Motion";
import { Preloader } from "./components/Preloader";
import { SmoothScroll } from "./components/SmoothScroll";
import { ui } from "./i18n/ui";
import { langOf } from "./i18n/routes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Ana sayfa dışındaki sayfalar ihtiyaç anında yüklenir.
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NewsList = lazy(() => import("./pages/News").then((m) => ({ default: m.NewsList })));
const NewsDetail = lazy(() => import("./pages/News").then((m) => ({ default: m.NewsDetail })));
const PolicyPage = lazy(() => import("./pages/Policy"));
const Projects = lazy(() => import("./pages/Projects"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Services = lazy(() => import("./pages/Services"));
const Sustainability = lazy(() => import("./pages/Sustainability"));

/** Sayfa değişiminde ekranı kısa bir perdeyle örter; sadece yol değişince tetiklenir. */
function Curtain() {
  const { pathname } = useLocation();
  return (
    <AnimatePresence>
      <motion.div
        key={pathname}
        className="curtain"
        aria-hidden
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.05 }}
      />
    </AnimatePresence>
  );
}

function Layout() {
  const { pathname } = useLocation();
  const t = ui[langOf(pathname)];
  return (
    <ConsentProvider>
      <SmoothScroll>
        <a href="#main" className="skip-link">
          {t.common.skip}
        </a>
        <Preloader />
        <Curtain />
        <Header />
        <main id="main">
          <Suspense fallback={<div style={{ minHeight: "100svh", background: "var(--ink)" }} />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
        <CookieBanner />
      </SmoothScroll>
    </ConsentProvider>
  );
}

/** Eski WordPress adreslerini yeni yapıya yönlendirir; mevcut bağlantılar kırılmaz. */
const legacy: [string, string][] = [
  ["/hakkimizda", "/kurumsal"],
  ["/hizmetlerimiz", "/faaliyet-alanlari"],
  ["/Projelerimiz", "/projeler"],
  ["/projelerimiz", "/projeler"],
  ["/tamamlanmis-projelerimiz", "/projeler"],
  ["/devam-eden-projelerimiz", "/projeler?durum=devam-eden"],
  ["/ana-hat-demiryolu-sistemleri-2", "/faaliyet-alanlari/ana-hat"],
  ["/hafif-rayli-sistemler", "/faaliyet-alanlari/hafif-rayli"],
  ["/sinyalizasyon", "/faaliyet-alanlari/sinyalizasyon"],
  ["/enerji", "/faaliyet-alanlari/enerji"],
  ["/insaat-isleri", "/faaliyet-alanlari/insaat"],
  ["/malzeme-temini-ve-satisi", "/faaliyet-alanlari/malzeme"],
  ["/pol-001-cevre-ve-isg-politikas", "/kurumsal/cevre-ve-isg-politikasi"],
  ["/pol-002-kalite-politikas", "/kurumsal/kalite-politikasi"],
  ["/blog", "/haberler"],
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="kurumsal" element={<About />} />
        <Route path="kurumsal/:slug" element={<PolicyPage />} />
        <Route path="faaliyet-alanlari" element={<Services />} />
        <Route path="faaliyet-alanlari/:slug" element={<ServiceDetail />} />
        <Route path="projeler" element={<Projects />} />
        <Route path="haberler" element={<NewsList />} />
        <Route path="haberler/:slug" element={<NewsDetail />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="surdurulebilirlik" element={<Sustainability />} />
        <Route path="cerez-politikasi" element={<CookiePolicy />} />

        <Route path="en">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about/:slug" element={<PolicyPage />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:slug" element={<NewsDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {legacy.map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

