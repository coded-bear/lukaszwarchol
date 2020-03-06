import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import SEO from "../seo";
import Layout from "../layout";
import { LinkButton, SocialMedia } from "../elements";
import { getHrefs } from "../../utils/langService";

const Home = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title="JavaScript Software Developer" lang={lang} />

      <section className="home-header">
        <div className="home-header__content">
          <p>{t.header.hello}</p>
          <h1>
            <span>
              <strong>{t.header.Im}</strong>
            </span>
          </h1>
          <p>
            <strong>JavaScript Software Developer</strong>
          </p>

          <LinkButton to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.header.hireMe} />
        </div>

        <div className="home-header__right"></div>

        <div className="home-header__social-media-container">
          <SocialMedia />
        </div>
      </section>
    </Layout>
  );
};

Home.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Home;
