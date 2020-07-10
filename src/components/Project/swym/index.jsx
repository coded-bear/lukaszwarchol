import React from "react";
import PropTypes from "prop-types";
import "../../../styles/pages/project/swym.scss";
import SEO from "../../seo";
import MainLayout from "../../../layouts/MainLayout";
import Intro from "../../common/Intro";

import mainImage from "../../../images/project/swym/main-image.png";
import img01 from "../../../images/project/swym/01.png";
import img02 from "../../../images/project/swym/02.png";
import img03 from "../../../images/project/swym/03.png";
import img04 from "../../../images/project/swym/04.png";
import img05 from "../../../images/project/swym/05.png";

const mainImages = [mainImage, img02];
const images = [img03, img04, img05, img01];

const SWYM = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <MainLayout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <div className="ProjectLayout">
        <div className="ProjectLayout__intro">
          <Intro text={t.title} />
        </div>

        <section className="container ProjectLayout__content">
          <div className="ProjectLayout__content--mainImage">
            {mainImages.map((elem, index) => (
              <img key={index} src={elem} alt={t.title} />
            ))}
          </div>
          <div className="ProjectLayout__content--description">
            <p>{t.description}</p>
          </div>
        </section>

        <section className="ProjectLayout__additional-images">
          <div className="container ProjectLayout__additional-images--container">
            {images.map((elem, index) => (
              <img key={index} src={elem} alt={t.title} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
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
