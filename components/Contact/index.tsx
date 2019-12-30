import React from "react";
import { NextPage } from "next";
import {
  StyledContactBox,
  StyledContactContent,
  SocialMediaContactBox,
  StyledSocialMediaElem
} from "../../styled/contact";
import { getLang } from "../../utils/langService";
import { Title, Heading, SubTitle } from "../elements";
import ContactForm from "./ContactForm";
import { SocialMediaElemProps } from "./interfaces";

import imgLocation from "../../static/images/contact/location.svg";
import imgEmail from "../../static/images/contact/email.svg";
import imgFacebook from "../../static/images/common/facebook.svg";
import imgLinkedin from "../../static/images/common/linkedin.svg";
import imgGithub from "../../static/images/common/github.svg";
import imgInstagram from "../../static/images/common/instagram.svg";

const SocialMediaElem: React.FC<SocialMediaElemProps> = props => (
  <StyledSocialMediaElem>
    <a href={props.href} target="_blank">
      <img src={props.image} alt={props.name} /> {props.name}
    </a>
  </StyledSocialMediaElem>
);

const Contact: NextPage<{ t: any }> = ({ t }) => (
  <section>
    <Title text={t.title} />

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

      <ContactForm t={t.form} />
    </StyledContactBox>
  </section>
);

Contact.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/contact.json`);
  return { t };
};

export default Contact;
