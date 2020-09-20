import React from "react";
import PropTypes from "prop-types";

import imgFacebook from "../../images/common/facebook.svg";
import imgLinkedin from "../../images/common/linkedin.svg";
import imgGithub from "../../images/common/github.svg";
import imgBehance from "../../images/common/behance.svg";
import imgInstagram from "../../images/common/instagram.svg";

const SocialMediaElem = ({ href, image, name }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={image} alt={name} />
  </a>
);

SocialMediaElem.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const SocialMedia = () => (
  <div className="SocialMedia">
    <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" name="Facebook" image={imgFacebook} />
    <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" name="LinkedIn" image={imgLinkedin} />
    <SocialMediaElem href="https://github.com/coded-bear" name="GitHub" image={imgGithub} />
    <SocialMediaElem href="https://www.behance.net/" name="Behance" image={imgBehance} />
    <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" name="Instagram" image={imgInstagram} />
  </div>
);

export default SocialMedia;
