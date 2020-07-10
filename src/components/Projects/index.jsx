import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/projects.scss";
import { Link } from "gatsby";
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
                <div>
                  <h3 className="name">{project.name}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="Project__links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.links.behance && (
                    <a href={project.links.behance} target="_blank" rel="noopener noreferrer">
                      Behance
                    </a>
                  )}
                  {project.links.learnMore && <Link to={`${path + project.links.learnMore}/`}>{t.learnMore}</Link>}
                  {project.links.go && (
                    <a href={project.links.go} target="_blank" rel="noopener noreferrer">
                      {t.go}
                    </a>
                  )}
                </div>
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
