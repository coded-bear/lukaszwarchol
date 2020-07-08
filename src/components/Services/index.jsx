import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/services.scss";
import Layout from "../layout";
import Subtitle from "../common/Subtitle";
import Heading from "../common/Heading";
import imgWebApp from "../../images/services/web-app.svg";
import imgWebsite from "../../images/services/website.svg";
import imgConsoleApp from "../../images/services/console-app.svg";
import imgMockup from "../../images/services/mockup.svg";
import imgCodeReview from "../../images/services/code-review.svg";
import imgOptimization from "../../images/services/optimization.svg";

const images = [imgWebApp, imgWebsite, imgConsoleApp, imgMockup, imgCodeReview, imgOptimization];

const Services = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Services">
        <div className="container">
          <Heading text={t.title} />
          <Subtitle text={t.subtitle} />

          <div className="Services__container">
            {t.boxes.map((elem, index) => (
              <div key={index} className="Services__elem">
                <img src={images[index]} alt={elem.title} />
                <h4>{elem.title}</h4>
                <p>{elem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

Services.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Services;
