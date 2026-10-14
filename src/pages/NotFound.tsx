import { Link } from "react-router-dom";
import { ArrowRight } from "../components/Icons";
import { useI18n } from "../i18n/useLang";
import { useTitle } from "../lib/useTitle";

export default function NotFound() {
  const { t, L } = useI18n();
  useTitle(t.notFound.meta);
  return (
    <section className="notfound">
      <div style={{ display: "grid", gap: 28, justifyItems: "center" }}>
        <b className="num">404</b>
        <h1 className="h2">{t.notFound.title}</h1>
        <p style={{ color: "rgba(255,255,255,.7)", maxWidth: 420 }}>{t.notFound.text}</p>
        <Link to={L.home()} className="btn btn--signal">
          {t.notFound.back} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
