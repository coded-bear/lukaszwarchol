import React from "react";
import { Link } from "gatsby";
import { SocialMedia } from "./elements";
import { StyledFooter } from "../styled/footer";
import { getHrefs } from "../utils/langService";

const NavElem = ({ to, text }) => (
  <Link to={to}>
    <li>{text}</li>
  </Link>
);

const Footer = ({ lang, t }) => (
  <StyledFooter>
    <nav>
      <ul>
        <NavElem to={`/${lang}/`} text="Home" />
        <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} text={t.nav.about} />
        <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} text={t.nav.services} />
        <NavElem to={`/${lang}/${getHrefs(lang)[2]}/`} text={t.nav.projects} />
        <NavElem to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.nav.contact} />
      </ul>
    </nav>

    <SocialMedia />

    <p>&copy; {new Date().getFullYear()} Łukasz Warchoł. All rights reserved</p>
  </StyledFooter>
);

export default Footer;
