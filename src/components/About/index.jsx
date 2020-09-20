import React from "react";
import "../../styles/pages/about.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import MainLayout from "../../layouts/MainLayout";
import Experience from "./Experience";
import Technologies from "./Technologies";
import Image from "./Image";
import Intro from "../common/Intro";
import LinkButton from "../common/LinkButton";
import { getHrefs } from "../../utils/langService";

const About = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <MainLayout t={layoutT} path={path} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section className="About">
        <div className="About__main-image">
          <Image />
        </div>

        <div className="About__content">
          <Intro title={t.title} />

          {t.description.map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}

          <LinkButton to={`/${lang}/${getHrefs(lang)[3]}/`}>{t.hireMe}</LinkButton>
        </div>
      </section>

      <Experience t={t.experience} />

      <Technologies t={t.technologies} />
    </MainLayout>
  );
};

About.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default About;
