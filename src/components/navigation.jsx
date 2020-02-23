import React, { forwardRef } from "react";
import { Link } from "gatsby";
import { SocialMedia } from "./elements";
import { StyledNavigation, StyledNavigationSocialMedia } from "../styled/header";
import imgClose from "../images/common/close.svg";

const NavElem = ({ to, text, closeMenu }) => (
  <Link to={to}>
    <li onClick={closeMenu}>{text}</li>
  </Link>
);

const Navigation = forwardRef(({ lang, t, closeMenu }, ref) => (
  <StyledNavigation ref={ref}>
    <button onClick={closeMenu}>
      <img src={imgClose} alt="close" />
    </button>

    <nav>
      <ul>
        <NavElem to={`/${lang}/`} text="Home" closeMenu={closeMenu} />
        <NavElem to={`/${lang}/about-me/`} text={t.about} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/services/`} text={t.services} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/projects/`} text={t.projects} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/contact/`} text={t.contact} closeMenu={closeMenu} />
      </ul>
    </nav>

    <StyledNavigationSocialMedia>
      <SocialMedia />
    </StyledNavigationSocialMedia>
  </StyledNavigation>
));

export default Navigation;
