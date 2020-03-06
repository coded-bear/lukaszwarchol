import React from "react";
import PropTypes from "prop-types";
import "../../styles/services.scss";
import SEO from "../seo";
import Layout from "../layout";
import { Heading, SubTitle } from "../elements";
import imgWebApp from "../../images/services/web-app.svg";
import imgWebsite from "../../images/services/website.svg";
import imgMockup from "../../images/services/mockup.svg";
import imgCodeReview from "../../images/services/code-review.svg";
import imgFast from "../../images/services/fast.svg";

const images = [imgWebApp, imgWebsite, imgMockup, imgCodeReview, imgFast];

const Services = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Services">
        <div className="container">
          <Heading text={t.title} />
          <SubTitle text={t.subtitle} />

          <div className="Services__container">
            {t.boxes.map((elem, index) => (
              <div className="Services__elem" key={index}>
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
