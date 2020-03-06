import React, { useEffect, useState, createRef } from "react";
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
  const ref = createRef();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) ref.current.classList.add("open");
    else ref.current.classList.remove("open");
  }, [menu, ref]);

  return (
    <header className="header">
      <h1 className="header__logo">
        <Link to={`/${lang}/`}>
          <img src={logo} alt="Łukasz Warchoł" />
        </Link>
      </h1>

      <div className="header__right-box">
        <LangBtns lang={lang} path={path} />

        <button className="menu-btn" onClick={() => setMenu(true)}>
          <img src={imgMenu} alt="menu" />
        </button>
      </div>

      <Navigation ref={ref} closeMenu={() => setMenu(false)} t={t.nav} lang={lang} />
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
