import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../layout";
import { Heading } from "../elements";

const Project = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Project">
        <Heading text={t.name} />

        <div className="container">
          <div className="Project__content">
            <img className="Project__mainImage" src={t.mainImage} alt={t.name} />
            <div>
              <p>{t.description}</p>
            </div>
          </div>

          <div className="Project__images">
            {t.images.map((image, index) => (
              <img key={index} src={image} alt={t.name} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Project.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Project;
