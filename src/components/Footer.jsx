import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import SocialMedia from "./common/SocialMedia";
import { getHrefs } from "../utils/langService";

const NavElem = ({ to, text }) => (
  <li>
    <Link to={to}>{text}</Link>
  </li>
);

const Footer = ({ lang, t }) => (
  <footer className="Footer">
    <nav className="Footer__nav">
      <ul>
        <NavElem to={`/${lang}/`} text="Home" />
        <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} text={t.nav.about} />
        <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} text={t.nav.services} />
        <NavElem to={`/${lang}/${getHrefs(lang)[2]}/`} text={t.nav.projects} />
        <NavElem to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.nav.contact} />
      </ul>
    </nav>

    <SocialMedia />

    <Link to={`/${lang}/${getHrefs(lang)[4]}/`}>{t.privacyPolicy}</Link>

    <p className="Footer__copy">&copy; {new Date().getFullYear()} Łukasz Warchoł. All rights reserved</p>
  </footer>
);

NavElem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Footer;