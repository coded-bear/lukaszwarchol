import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/privacyPolicy.scss";
import Layout from "../../layout";
import Intro from "../common/Intro";

const PrivacyPolicy = props => {
  const { t, lang, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout t={layoutT} path={path} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section className="PrivacyPolicy container">
        <Intro text={t.title} />

        <p>
          {t.description[0]}
          <a href="https://lukaszwarchol.pl">https://lukaszwarchol.pl</a>.
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
            <a href="https://lukaszwarchol.pl">https://lukaszwarchol.pl</a>
          </li>
          <li>{t.definitions.list[2]}</li>
        </ul>

        <p className="paragraph">
          <strong>§ {t.personalData.name}</strong>
        </p>
        <ol>
          {t.personalData.list.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ol>

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
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default PrivacyPolicy;
