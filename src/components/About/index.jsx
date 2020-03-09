import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/about.scss";
import Layout from "../layout";
import { Heading, LinkButton } from "../elements";
import Experience from "./Experience";
import Technologies from "./Technologies";
import { getHrefs } from "../../utils/langService";
import imgMe from "../../images/about/me.jpg";

const About = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout t={layoutT} path={path} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section className="About">
        <div className="About__main-image">
          <img src={imgMe} alt="Łukasz Warchoł" />
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
