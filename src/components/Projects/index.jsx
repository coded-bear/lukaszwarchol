import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/projects.scss";
import MainLayout from "../../layouts/MainLayout";
import Subtitle from "../common/Subtitle";
import Heading from "../common/Heading";

const Projects = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <MainLayout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Projects">
        <Heading text={t.title} />
        <Subtitle text={t.subtitle} />

        <div className="container Projects__list">
          {t.projectsList.map((project, index) => (
            <div key={index} className="Project">
              <div className={`Project__image ${project.shortName}`}></div>
              <div className="Project__content">
                <h3 className="name">{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
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
