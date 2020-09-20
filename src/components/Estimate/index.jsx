import React from "react";
import "../../styles/pages/privacyPolicy.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import MainLayout from "../../layouts/MainLayout";
import Intro from "../common/Intro";

const Estimate = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <MainLayout t={layoutT} path={path} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section className="container Estimate">
        <Intro title={t.title} description={t.subtitle} />

        <div></div>
      </section>
    </MainLayout>
  );
};

Estimate.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Estimate;
