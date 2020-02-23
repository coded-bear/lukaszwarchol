import React from "react";
import { Link } from "gatsby";
import { StyledHeading, StyledSubTitle, StyledLinkButton, StyledSocialMedia } from "../../styled/layout";
import imgFacebook from "../../images/common/facebook.svg";
import imgLinkedin from "../../images/common/linkedin.svg";
import imgGithub from "../../images/common/github.svg";
import imgInstagram from "../../images/common/instagram.svg";

export const Heading = ({ dark, left, text }) => (
  <StyledHeading dark={dark} left={left}>
    {text}
  </StyledHeading>
);

export const SubTitle = ({ text }) => <StyledSubTitle>{text}</StyledSubTitle>;

export const LinkButton = ({ to, light, text }) => (
  <Link to={to}>
    <StyledLinkButton light={light}>
      <strong>{text}</strong>
    </StyledLinkButton>
  </Link>
);

const SocialMediaElem = ({ href, image, name }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={name} />
  </a>
);

export const SocialMedia = () => (
  <StyledSocialMedia>
    <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" name="Facebook" image={imgFacebook} />
    <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" name="LinkedIn" image={imgLinkedin} />
    <SocialMediaElem href="https://github.com/coded-bear" name="GitHub" image={imgGithub} />
    <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" name="Instagram" image={imgInstagram} />
  </StyledSocialMedia>
);
