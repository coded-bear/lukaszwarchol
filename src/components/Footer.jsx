import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getHrefs } from "../utils/langService";

import imgLogo from "../images/common/lukaszwarchol-logo.svg";

const FooterLink = ({ name, to, path }) => (
  <li className={to === path ? "active" : ""}>
    <Link to={to}>{name}</Link>
  </li>
);

const FooterBasicLink = ({ name, to }) => (
  <li>
    <a href={to} rel="noopener noreferrer">
      {name}
    </a>
  </li>
);

const Footer = ({ lang, t, path }) => (
  <footer className="Footer">
    <div className="container">
      <div className="Footer__container">
        <div>
          <img className="Footer__logo" src={imgLogo} alt="Łukasz Warchoł" />

          <p>Łukasz Warchoł</p>
          <p>{t.vatID}: PL7962992882</p>
          <p>REGON: 384430757</p>
          <p>
            E-mail: <a href="mailto:contact@lukaszwarchol.pl">contact@lukaszwarchol.pl</a>
          </p>
        </div>

        <div>
          <p className="title">Menu</p>
          <ul>
            <FooterLink name={t.menu.home} to={`/${lang}/`} path={path} />
            <FooterLink name={t.menu.about} to={`/${lang}/${getHrefs(lang)[0]}/`} path={path} />
            <FooterLink name={t.menu.services} to={`/${lang}/${getHrefs(lang)[1]}/`} path={path} />
            <FooterLink name={t.menu.projects} to={`/${lang}/${getHrefs(lang)[2]}/`} path={path} />
            <FooterLink name={t.menu.contact} to={`/${lang}/${getHrefs(lang)[3]}/`} path={path} />
            <FooterLink name={t.menu.privacyPolicy} to={`/${lang}/${getHrefs(lang)[4]}/`} path={path} />
          </ul>
        </div>

        <div>
          <p className="title">{t.services.title}</p>
          <ul>
            {t.services.list.map((elem, index) => (
              <FooterLink key={index} name={elem} to={`/${lang}/${getHrefs(lang)[1]}/`} />
            ))}
          </ul>
        </div>

        <div>
          <p className="title">Social Media</p>
          <ul>
            <FooterBasicLink name="Facebook" to="https://www.facebook.com/lukasz.warchol14" />
            <FooterBasicLink name="LinkedIn" to="https://www.linkedin.com/in/lukasz-warchol/" />
            <FooterBasicLink name="GitHub" to="https://github.com/coded-bear" />
            <FooterBasicLink name="Behance" to="https://www.behance.net/" />
            <FooterBasicLink name="Instagram" to="https://www.instagram.com/lukasz.warchol/" />
          </ul>
        </div>
      </div>

      <div className="Footer__copy">
        <p>&copy; {new Date().getFullYear()} Łukasz Warchoł. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default Footer;
