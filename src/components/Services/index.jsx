import React, { useEffect } from "react";
import "../../styles/pages/services.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import Layout from "../Layout";
import Intro from "../common/Intro";
import gsap from "gsap";

import imgWeb from "../../images/services/web.svg";
import imgDesktop from "../../images/services/desktop.svg";
import imgMobile from "../../images/services/mobile.svg";
import imgMockup from "../../images/services/mockup.svg";
const images = [imgWeb, imgDesktop, imgMobile, imgMockup];

const Services = props => {
  const { lang, t, layoutT } = props.pageContext;

  useEffect(() => {
    gsap.fromTo(".Services__container", { scale: 0.85 }, { scale: 1 });
  }, []);

  return (
    <Layout lang={lang} path={props.location.pathname} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Services">
        <div className="container">
          <Intro title={t.title} description={t.subtitle} />

          <div className="Services__container">
            {t.boxes.map((elem, index) => (
              <div key={index} className="RoundBox Services__elem">
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
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Services;
