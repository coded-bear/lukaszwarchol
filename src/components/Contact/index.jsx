import React from "react";
import "../../styles/pages/contact.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import MainLayout from "../../layouts/MainLayout";
import SocialMedia from "../common/SocialMedia";
import ContactForm from "./ContactForm";
import Intro from "../common/Intro";

const Contact = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <MainLayout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Contact">
        <div className="container">
          <Intro title={t.title} description={t.subtitle} />

          <div className="Contact__container">
            <div className="Contact__content">
              <p>Łukasz Warchoł</p>
              <p>{t.vatID}: PL7962992882</p>
              <p>REGON: 384430757</p>
              <p>
                E-mail: <a href="mailto:contact@lukaszwarchol.pl">contact@lukaszwarchol.pl</a>
              </p>

              <SocialMedia />
            </div>

            <ContactForm lang={lang} t={t.form} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

Contact.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Contact;
