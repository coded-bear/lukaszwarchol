import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../layout";
import { Heading, SubTitle } from "../elements";

const Projects = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Projects">
        <Heading text={t.title} />
        <SubTitle text={t.subtitle} />

        <div className="container"></div>
      </section>
    </Layout>
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
