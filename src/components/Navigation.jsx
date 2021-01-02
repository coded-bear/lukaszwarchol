import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getHrefs } from "../utils/langService";

export const NavElem = ({ to, name, path, active }) => (
  <li className={to === path || active ? "active" : ""}>
    <Link to={to}>{name}</Link>
  </li>
);

NavElem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  active: PropTypes.bool
};

const Navigation = ({ lang, t, path }) => (
  <nav className="Navigation">
    <ul>
      <NavElem to={`/${lang}/`} name="Home" path={path} active={path === "/"} />
      <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} name={t.about} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} name={t.services} path={path} />
    </ul>
  </nav>
);

Navigation.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default Navigation;
