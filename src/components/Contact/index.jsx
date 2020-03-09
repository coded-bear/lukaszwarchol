import React from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/contact.scss";
import Layout from "../layout";
import { Heading, SubTitle } from "../elements";
import ContactForm from "./ContactForm";
import imgLocation from "../../images/contact/location.svg";
import imgEmail from "../../images/contact/email.svg";
import imgFacebook from "../../images/common/facebook.svg";
import imgLinkedin from "../../images/common/linkedin.svg";
import imgGithub from "../../images/common/github.svg";
import imgInstagram from "../../images/common/instagram.svg";

const SocialMediaElem = ({ href, image, name }) => (
  <div className="Contact__social-media-elem">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={name} /> {name}
    </a>
  </div>
);

const Contact = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

      <section className="Contact">
        <Heading text={t.title} />
        <SubTitle text={t.subtitle} />

        <div className="Contact__container">
          <div className="Contact__content">
            <div className="location">
              <img src={imgLocation} alt="Location" /> {t.location}
            </div>

            <div className="email">
              <a href="mailto: contact@lukaszwarchol.pl">
                <img src={imgEmail} alt="Email" /> contact@lukaszwarchol.pl
              </a>
            </div>

            <div className="Contact__social-media-container">
              <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" image={imgFacebook} name="Facebook" />
              <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" image={imgLinkedin} name="Linkedin" />
              <SocialMediaElem href="https://github.com/coded-bear" image={imgGithub} name="GitHub" />
              <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" image={imgInstagram} name="Instagram" />
            </div>
          </div>

          <ContactForm t={t.form} lang={lang} />
        </div>
      </section>
    </Layout>
  );
};

SocialMediaElem.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
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
