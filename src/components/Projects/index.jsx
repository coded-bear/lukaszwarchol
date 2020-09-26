import React, { useEffect, useState } from "react";
import "../../styles/pages/projects.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import MainLayout from "../../layouts/MainLayout";
import ProjectsBtn from "./ProjectsBtn";
import Project from "./Project";
import Intro from "../common/Intro";
import { projectsCategoriesList } from "../../utils/common";
import gsap from "gsap";

const Projects = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;
  const [category, setCategory] = useState(0);

  useEffect(() => {
    gsap.fromTo(".Projects__list", { scale: 0.85 }, { scale: 1 });
  }, [category]);

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
