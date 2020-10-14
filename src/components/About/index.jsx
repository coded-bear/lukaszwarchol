import React, { useEffect } from "react";
import "../../styles/pages/about.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../Layout";
import Experience from "./Experience";
import Technologies from "./Technologies";
import Image from "./Image";
import Intro from "../common/Intro";
import LinkButton from "../common/LinkButton";
import { getHrefs } from "../../utils/langService";
import gsap from "gsap";

const About = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  useEffect(() => {
    gsap.fromTo(".About__main-image", { scale: 0.85, autoAlpha: 0 }, { scale: 1, autoAlpha: 1 });
  }, []);

  return (
    <Layout t={layoutT} path={path} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section className="About">
        <div className="container About__container">
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
