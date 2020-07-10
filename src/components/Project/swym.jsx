import React from "react";
import PropTypes from "prop-types";
import ProjectLayout from "../../layouts/ProjectLayout";

import mainImage from "../../images/project/swym/main-image.png";
import img01 from "../../images/project/swym/01.png";
import img02 from "../../images/project/swym/02.png";
import img03 from "../../images/project/swym/03.png";
import img04 from "../../images/project/swym/04.png";
import img05 from "../../images/project/swym/05.png";

const images = [img01, img02, img03, img04, img05];

const SWYM = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return <ProjectLayout lang={lang} path={path} layoutT={layoutT} t={t} mainImage={mainImage} images={images} />;
};

SWYM.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default SWYM;
