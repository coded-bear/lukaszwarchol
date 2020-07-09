import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/about.scss";
import Layout from "../../layout";
import LinkButton from "../common/LinkButton";
import Image from "./Image";
import Heading from "../common/Heading";
import Experience from "./Experience";
import Technologies from "./Technologies";
import { getHrefs } from "../../utils/langService";

const About = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout t={layoutT} path={path} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section className="About">
        <div className="About__main-image">
          <Image />
        </div>

        <div className="About__content">
          <Heading left text={t.title} />

          {t.description.map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}

          <LinkButton to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.hireMe} />
        </div>
      </section>

      <Experience t={t.experience} />

      <Technologies t={t.technologies} />
    </Layout>
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
