import { Link } from "react-router-dom";
import { useContent } from "../i18n/content";
import { useI18n } from "../i18n/useLang";
import { socialIcon } from "./Icons";
import { LogoStacked } from "./Logo";

const YEAR = new Date().getFullYear();

export function Footer() {
  const { t, L } = useI18n();
  const { company, contact, services } = useContent();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to={L.home()} aria-label="EMRERAY" style={{ width: 200 }}>
              <LogoStacked />
            </Link>
            <p>{t.footer.about}</p>
            <div className="socials">
              {contact.social.map((s) => {
                const Icon = socialIcon[s.name as keyof typeof socialIcon];
                return (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4>{t.nav.services}</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={L.service(s.slug)}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.footer.corporate}</h4>
            <ul>
              <li>
                <Link to={L.about()}>{t.nav.about}</Link>
              </li>
              <li>
                <Link to={L.sustainability()}>{t.nav.sustainability}</Link>
              </li>
              <li>
                <Link to={L.projects()}>{t.nav.completed}</Link>
              </li>
              <li>
                <Link to={L.projects({ ongoing: true })}>{t.nav.ongoing}</Link>
              </li>
              <li>
                <Link to={L.news()}>{t.nav.news}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>{t.footer.contact}</h4>
            <address>
              {contact.offices.map((o) => (
                <div key={o.title}>
                  <b>{o.title}</b>
                  {o.address}
                </div>
              ))}
              <div>
                <a href={contact.phoneHref}>{contact.phone}</a>
                <br />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </address>
          </div>
        </div>
      </div>

      <div className="footer__giant" aria-hidden>
        EMRERΛY
      </div>

      <div className="container">
        <div className="footer__bottom">
          <span>
            © {YEAR} {company.legal} {t.footer.rights}
          </span>
          <nav aria-label={t.footer.bottom}>
            <Link to={L.policy("kalite-politikasi")}>POL-002 {t.nav.quality}</Link>
            <Link to={L.policy("cevre-ve-isg-politikasi")}>POL-001 {t.nav.ohs}</Link>
            <Link to={L.cookies()}>{t.cookie.policy}</Link>
            <a href={`mailto:${contact.careerEmail}`}>{t.footer.career}</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
