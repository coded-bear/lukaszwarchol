import React from "react";
import { Link } from "gatsby";
import { SocialMedia } from "./elements";
import { StyledFooter } from "../styled/footer";

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
        <NavElem to={`/${lang}/about-me/`} text={t.nav.about} />
        <NavElem to={`/${lang}/services/`} text={t.nav.services} />
        <NavElem to={`/${lang}/projects/`} text={t.nav.projects} />
        <NavElem to={`/${lang}/contact/`} text={t.nav.contact} />
      </ul>
    </nav>

    <SocialMedia />

    <p>&copy; {new Date().getFullYear()} Łukasz Warchoł. All rights reserved</p>
  </StyledFooter>
);

export default Footer;
