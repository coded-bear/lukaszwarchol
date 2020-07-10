import React from "react";
import PropTypes from "prop-types";
import "../styles/layouts/projectLayout.scss";
import SEO from "../components/seo";
import MainLayout from "./MainLayout";
import Intro from "../components/common/Intro";

const ProjectLayout = ({ lang, path, layoutT, t, mainImage, images }) => {
  return (
    <MainLayout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <div className="ProjectLayout">
        <Intro text={t.title} />

        <section className="container ProjectLayout__content">
          <div>
            <img src={mainImage} alt={t.title} />
          </div>
          <div>
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

ProjectLayout.propTypes = {
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  layoutT: PropTypes.object.isRequired,
  t: PropTypes.object.isRequired,
  mainImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string)
};

export default ProjectLayout;
