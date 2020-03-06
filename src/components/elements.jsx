import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getHrefs } from "../utils/langService";
import imgFacebook from "../images/common/facebook.svg";
import imgLinkedin from "../images/common/linkedin.svg";
import imgGithub from "../images/common/github.svg";
import imgInstagram from "../images/common/instagram.svg";

export const Heading = ({ dark, left, text }) => (
  <h1 className={`heading ${dark && "dark"} ${left && "left"}`}>{text}</h1>
);

export const Intro = ({ dark, left, text }) => (
  <h2 className={`heading ${dark && "dark"} ${left && "left"}`}>{text}</h2>
);

export const SubTitle = ({ text }) => <p className="subtitle">{text}</p>;

export const LinkButton = ({ to, light, text }) => (
  <Link to={to}>
    <h2 className={`link-button ${light && "light"}`}>
      <strong>{text}</strong>
    </h2>
  </Link>
);

export const SocialMediaElem = ({ href, image, name, withName }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={name} />
  </a>
);

export const SocialMedia = () => (
  <div className="social-media">
    <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" name="Facebook" image={imgFacebook} />
    <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" name="LinkedIn" image={imgLinkedin} />
    <SocialMediaElem href="https://github.com/coded-bear" name="GitHub" image={imgGithub} />
    <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" name="Instagram" image={imgInstagram} />
  </div>
);

export const HireMeBox = ({ lang, t }) => (
  <div className="hire-me-box">
    <div className="container">
      <Heading dark left text={t.havaAnyProject} />

      <LinkButton light to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.hireMe} />
    </div>
  </div>
);

Heading.propTypes = {
  dark: PropTypes.bool,
  left: PropTypes.bool,
  text: PropTypes.string.isRequired
};

Intro.propTypes = {
  dark: PropTypes.bool,
  left: PropTypes.bool,
  text: PropTypes.string.isRequired
};

SubTitle.propTypes = {
  text: PropTypes.string.isRequired
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  light: PropTypes.bool,
  text: PropTypes.string.isRequired
};

SocialMediaElem.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

HireMeBox.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};
