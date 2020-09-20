import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Navigation from "./Navigation";
import LinkButton from "./common/LinkButton";
import { langsList, changePath, getHrefs } from "../utils/langService";

import imgLogo from "../images/common/lukaszwarchol-logo.svg";

const Header = ({ lang, path, t }) => (
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

        <LinkButton to={`/${lang}/${getHrefs(lang)[4]}/`}>{t.estimate}</LinkButton>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Header;
