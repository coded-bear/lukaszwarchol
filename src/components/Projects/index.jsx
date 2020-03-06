import React, { useState } from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../layout";
import { Heading, SubTitle } from "../elements";
import { All, WebApplications, Websites, Mockups } from "./AllProjects";

const Button = ({ onClick, active, name }) => (
  <button className="Projects__btn" onClick={onClick} active={active}>
    {name}
  </button>
);

const Projects = props => {
  const [view, setView] = useState(1);

  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Projects">
        <Heading text={t.title} />
        <SubTitle text={t.subtitle} />

        <div className="container">
          <div>
            {t.views.map((elem, index) => (
              <Button key={index} onClick={() => setView(index + 1)} active={view === index + 1} name={elem} />
            ))}
          </div>

          <div className="Projects__list">
            {view === 2 ? (
              <WebApplications path={path} />
            ) : view === 3 ? (
              <Websites path={path} />
            ) : view === 4 ? (
              <Mockups path={path} />
            ) : (
              <All path={path} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
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
