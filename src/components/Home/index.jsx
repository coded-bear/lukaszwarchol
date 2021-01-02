import React, { useEffect, useRef } from "react";
import "../../styles/pages/home.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../Layout";
import SocialMedia from "../common/SocialMedia";
import Numbers from "../Numbers";
import LinkButton from "../common/LinkButton";
import { getHrefs } from "../../utils/langService";
import { writer } from "../../utils/writer";
import { animateLandscape } from "../../utils/animateLandscape";

import Landscape from "../../images/common/landscape.svg";

const Home = props => {
  const { lang, t, layoutT } = props.pageContext;

  const landscapeWrapper = useRef(null);
  const writerRef = useRef(null);

  useEffect(() => {
    let interval;
    writer(interval, writerRef.current, t.hero.textList, 80);

    animateLandscape(landscapeWrapper);

    return () => clearInterval(interval);
  }, [t.hero.textList]);

  return (
    <Layout lang={lang} path={props.location.pathname} t={layoutT}>
      <SEO title="JavaScript Software Developer" lang={lang} />

      <div className="Home">
        <section className="container Home__hero">
          <div className="Home__hero--content">
            <h2>{t.hero.hello}</h2>
            <h2>
              <span ref={writerRef} className="writer"></span>
            </h2>

            <LinkButton to={`/${lang}/${getHrefs(lang)[2]}/`}>{t.hero.contactMe}</LinkButton>

            <SocialMedia />
          </div>

          <div ref={landscapeWrapper} className="Home__hero--right">
            <Landscape className="Home__hero--landscape" />
          </div>
        </section>

        <Numbers t={t.numbers} />
      </div>
    </Layout>
  );
};

Home.propTypes = {
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Home;
