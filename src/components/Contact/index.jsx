import React from "react";
import SEO from "../seo";
import Layout from "../layout";
import {
  StyledContactBox,
  StyledContactContent,
  SocialMediaContactBox,
  StyledSocialMediaElem
} from "../../styled/contact";
import { Heading, SubTitle } from "../elements";
import ContactForm from "./ContactForm";
import imgLocation from "../../images/contact/location.svg";
import imgEmail from "../../images/contact/email.svg";
import imgFacebook from "../../images/common/facebook.svg";
import imgLinkedin from "../../images/common/linkedin.svg";
import imgGithub from "../../images/common/github.svg";
import imgInstagram from "../../images/common/instagram.svg";

const SocialMediaElem = ({ href, image, name }) => (
  <StyledSocialMediaElem>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={name} /> {name}
    </a>
  </StyledSocialMediaElem>
);

const Contact = ({ pageContext }) => {
  const { lang, t, layoutT } = pageContext;

  return (
    <Layout t={layoutT} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <section>
        <Heading text={t.title} />
        <SubTitle text={t.subtitle} />

        <StyledContactBox>
          <StyledContactContent>
            <div className="location">
              <img src={imgLocation} alt="Location" /> {t.location}
            </div>

            <div className="email">
              <a href="mailto: contact@lukaszwarchol.pl">
                <img src={imgEmail} alt="Email" /> contact@lukaszwarchol.pl
              </a>
            </div>

            <SocialMediaContactBox>
              <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" image={imgFacebook} name="Facebook" />
              <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" image={imgLinkedin} name="Linkedin" />
              <SocialMediaElem href="https://github.com/coded-bear" image={imgGithub} name="GitHub" />
              <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" image={imgInstagram} name="Instagram" />
            </SocialMediaContactBox>
          </StyledContactContent>

          <ContactForm t={t.form} lang={lang} />
        </StyledContactBox>
      </section>
    </Layout>
  );
};

export default Contact;
