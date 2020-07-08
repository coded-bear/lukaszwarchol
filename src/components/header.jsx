import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Navigation from "./Navigation";
import { langsList, changePath } from "../utils/langService";
import logo from "../images/common/logo.svg";
import imgMenu from "../images/common/menu.svg";

const LangBtns = props => (
  <div className="lang-btns">
    {langsList.map((lang, index) => (
      <Link key={index} to={changePath(lang, props.path)}>
        <p className={lang === props.lang ? "active" : ""}>{lang}</p>
      </Link>
    ))}
  </div>
);

const Header = ({ lang, path, t }) => {
  const [menu, setMenu] = useState(false);

  const openMenu = useCallback(() => {
    setMenu(true);
  }, [setMenu]);

  const closeMenu = useCallback(() => {
    setMenu(false);
  }, [setMenu]);

  return (
    <header className="Header">
      <Link to={`/${lang}/`}>
        <img src={logo} alt="Łukasz Warchoł" className="header__logo" />
      </Link>

      <div className="header__right-box">
        <LangBtns lang={lang} path={path} />

        <button className="menu-btn" onClick={openMenu}>
          <img src={imgMenu} alt="menu" />
        </button>
      </div>

      {menu && <Navigation closeMenu={closeMenu} t={t.nav} lang={lang} />}
    </header>
  );
};

LangBtns.propTypes = {
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

Header.propTypes = {
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Header;
