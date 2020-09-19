import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/projects.scss";
import MainLayout from "../../layouts/MainLayout";
import Intro from "../common/Intro";

const Projects = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <MainLayout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Projects">
        <div className="container">
          <Intro title={t.title} description={t.subtitle} />
        </div>
      </section>
    </MainLayout>
  );
};

Projects.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Projects;
