import React, { useState } from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/projects.scss";
import MainLayout from "../../layouts/MainLayout";
import Intro from "../common/Intro";
import ProjectsBtn from "./ProjectsBtn";
import Project from "./Project";
import { projectsCategoriesList } from "../../utils/common";

const Projects = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;
  const [category, setCategory] = useState(0);

  return (
    <MainLayout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Projects">
        <div className="container">
          <Intro title={t.title} description={t.subtitle} />

          <div>
            {projectsCategoriesList.map((elem, index) => (
              <ProjectsBtn key={index} name={elem} click={() => setCategory(index)} active={category === index} />
            ))}
          </div>

          <div className="Projects__list">
            {t.projectsList.map((elem, index) => {
              if (category === 0 || category === elem.category) return <Project key={index} t={elem} />;
            })}
          </div>
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
