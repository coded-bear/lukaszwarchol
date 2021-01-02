import React from "react";
import "../../styles/pages/privacyPolicy.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../Layout";
import Intro from "../common/Intro";

const PrivacyPolicy = props => {
  const { t, lang, layoutT } = props.pageContext;

  return (
    <Layout t={layoutT} path={props.location.pathname} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section className="container PrivacyPolicy">
        <Intro title={t.title} />

        <p>
          {t.description[0]}
          <a href="https://lukaszwarchol.pl/">https://lukaszwarchol.pl</a>.
          <br />
          {t.description[1]}
          <a href="mailto: contact@lukaszwarchol.pl">contact@lukaszwarchol.pl</a>.
        </p>

        <p className="paragraph">
          <strong>§ {t.definitions.name}</strong>
        </p>
        <ul>
          {t.definitions.label}
          <li>{t.definitions.list[0]}</li>
          <li>
            {t.definitions.list[1]}
            <a href="https://lukaszwarchol.pl/">https://lukaszwarchol.pl</a>
          </li>
          <li>{t.definitions.list[2]}</li>
        </ul>

        <p className="paragraph">
          <strong>§ {t.cookies.name}</strong>
        </p>
        <ol>
          {t.cookies.list.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ol>
      </section>
    </Layout>
  );
};

PrivacyPolicy.propTypes = {
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default PrivacyPolicy;
