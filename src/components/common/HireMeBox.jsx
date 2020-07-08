import React from "react";
import PropTypes from "prop-types";
import Heading from "./Heading";
import LinkButton from "./LinkButton";
import { getHrefs } from "../../utils/langService";

const HireMeBox = ({ lang, t }) => (
  <div className="HireMeBox">
    <div className="container">
      <Heading dark left text={t.havaAnyProject} />

      <LinkButton light to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.hireMe} />
    </div>
  </div>
);

HireMeBox.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default HireMeBox;
