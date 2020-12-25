import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Navigation from "./Navigation";
import LinkButton from "./common/LinkButton";
import { langsList, changePath, getHrefs } from "../utils/langService";

import imgLogo from "../images/common/lukaszwarchol-logo.svg";
import HamburgerMenu from "../images/common/menu.svg";

const Header = ({ lang, path, t, toggleMobileNav }) => (
  <header className="Header">
    <div className="container Header__container">
      <Link to={`/${lang}/`}>
        <img src={imgLogo} alt="Łukasz Warchoł" className="Header__logo" />
      </Link>

      <Navigation lang={lang} t={t.nav} path={path} />

      <div className="Header__right">
        <div className="Header__change-lang">
          {langsList.map((elem, index) => (
            <Link key={index} to={changePath(elem, path)} className={elem === lang ? "active" : ""}>
              <p>{elem}</p>
            </Link>
          ))}
        </div>

        <LinkButton to={`/${lang}/${getHrefs(lang)[2]}/`}>{t.nav.contact}</LinkButton>

        <button className="Header__menu" onClick={toggleMobileNav}>
          <HamburgerMenu />
        </button>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  toggleMobileNav: PropTypes.func.isRequired
};

export default Header;
