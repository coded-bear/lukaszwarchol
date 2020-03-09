import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { SocialMedia } from "./elements";
import imgClose from "../images/common/close.svg";
import { getHrefs } from "../utils/langService";

const NavElem = ({ to, name, closeMenu }) => (
  <li>
    <Link to={to} onClick={closeMenu}>
      {name}
    </Link>
  </li>
);

const Navigation = ({ lang, t, closeMenu }) => (
  <div className="navigation">
    <button onClick={closeMenu}>
      <img src={imgClose} alt="close" />
    </button>

    <nav>
      <ul>
        <NavElem to={`/${lang}/`} name="Home" closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} name={t.about} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} name={t.services} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[2]}/`} name={t.projects} closeMenu={closeMenu} />
        <NavElem to={`/${lang}/${getHrefs(lang)[3]}/`} name={t.contact} closeMenu={closeMenu} />
      </ul>
    </nav>

    <div className="navigation__social-media">
      <SocialMedia />
    </div>
  </div>
);

NavElem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
};

Navigation.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default Navigation;
