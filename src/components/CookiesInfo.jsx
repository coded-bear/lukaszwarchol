import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getHrefs } from "../utils/langService";
import imgClose from "../images/common/close.svg";

const CookiesInfo = ({ lang, t }) => (
  <div className="CookiesInfo">
    <div className="container">
      <button className="CookiesInfo__close">
        <img src={imgClose} alt="close" />
      </button>

      <p>
        {t.text} <Link to={`/${lang}/${getHrefs(lang)[4]}/`}>{t.privacyPolicy}</Link>
      </p>
    </div>
  </div>
);

CookiesInfo.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default CookiesInfo;
