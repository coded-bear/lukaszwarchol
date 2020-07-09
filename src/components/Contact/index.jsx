import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/contact.scss";
import Layout from "../../layout";
import Subtitle from "../common/Subtitle";
import Heading from "../common/Heading";
import ContactForm from "./ContactForm";
import SocialMedia from "../common/SocialMedia";

const Contact = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Contact">
        <Heading text={t.title} />
        <Subtitle text={t.subtitle} />

        <div className="Contact__container">
          <div className="Contact__content">
            <div className="Contact__content-elem">
              <p className="name">{t.business}</p>
              <p>Łukasz Warchoł</p>
            </div>
            <div className="Contact__content-elem">
              <p className="name">{t.location.name}</p>
              <p>{t.location.value}</p>
            </div>
            <div className="Contact__content-elem">
              <p className="name">{t.taxNumber}</p>
              <p>7962992882</p>
            </div>
            <div className="Contact__content-elem">
              <p className="name">E-mail</p>
              <a href="mailto: contact@lukaszwarchol.pl">contact@lukaszwarchol.pl</a>
            </div>
            <SocialMedia />
          </div>

          <ContactForm t={t.form} lang={lang} />
        </div>
      </section>
    </Layout>
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
