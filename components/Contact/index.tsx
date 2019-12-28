import React from "react";
import {
  StyledContactBox,
  StyledContactContent,
  SocialMediaContactBox,
  StyledSocialMediaElem
} from "../../styled/contact";
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

const Contact: React.FC = () => (
  <section>
    <Title text="Contact" />

    <Heading text="Contact" />
    <SubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" />

    <StyledContactBox>
      <StyledContactContent>
        <div>
          <img src={imgLocation} alt="Location" /> Poland, Warsaw
        </div>

        <a href="mailto: contact@lukaszwarchol.pl">
          <img src={imgEmail} alt="Email" /> contact@lukaszwarchol.pl
        </a>

        <SocialMediaContactBox>
          <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" image={imgFacebook} name="Facebook" />
          <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" image={imgLinkedin} name="Linkedin" />
          <SocialMediaElem href="https://github.com/coded-bear" image={imgGithub} name="GitHub" />
          <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" image={imgInstagram} name="Instagram" />
        </SocialMediaContactBox>
      </StyledContactContent>

      <ContactForm />
    </StyledContactBox>
  </section>
);

export default Contact;
