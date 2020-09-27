import React from "react";
import PropTypes from "prop-types";
import { NavElem } from "./Navigation";
import { getHrefs } from "../utils/langService";
import SocialMedia from "./common/SocialMedia";

const MobileNavigation = ({ lang, t, path }) => (
  <div className="MobileNavigation">
    <ul>
      <NavElem to={`/${lang}/`} name="Home" path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} name={t.about} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} name={t.services} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[2]}/`} name={t.projects} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[3]}/`} name={t.contact} path={path} />
      <NavElem to={`/${lang}/${getHrefs(lang)[4]}/`} name={t.estimate} path={path} />
    </ul>

    <SocialMedia />
  </div>
);

MobileNavigation.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default MobileNavigation;
