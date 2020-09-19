import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getHrefs } from "../utils/langService";

const NavElem = ({ to, name, path }) => (
  <li className={to === path && "active"}>
    <Link to={to}>{name}</Link>
  </li>
);

const Navigation = ({ lang, t, path }) => (
  <nav className="Navigation">
    <ul>
      <NavElem to={`/${lang}/`} name="Home" path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} name={t.about} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} name={t.services} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[2]}/`} name={t.projects} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[3]}/`} name={t.contact} path={path} />
    </ul>
  </nav>
);

NavElem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

Navigation.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default Navigation;
