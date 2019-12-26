import React from "react";
import Link from "next/link";
import { NavElemProps, SocialMediaElemProps } from "./interfaces";
import { StyledFooter, StyledSocialMedia } from "../../styled/footer";

import imgFacebook from "../../static/images/common/facebook.svg";
import imgLinkedin from "../../static/images/common/linkedin.svg";
import imgGithub from "../../static/images/common/github.svg";
import imgInstagram from "../../static/images/common/instagram.svg";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <li>
      <a>{props.text}</a>
    </li>
  </Link>
);

const SocialMediaElem: React.FC<SocialMediaElemProps> = props => (
  <a href={props.href} target="_blank">
    <img src={props.image} alt={props.name} />
  </a>
);

const Footer: React.FC = () => (
  <StyledFooter>
    <nav>
      <ul>
        <NavElem href="" as="" text="Home" />
        <NavElem href="" as="" text="About" />
        <NavElem href="" as="" text="Services" />
        <NavElem href="" as="" text="Projects" />
        <NavElem href="" as="" text="Contact" />
      </ul>
    </nav>

    <StyledSocialMedia>
      <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" name="Facebook" image={imgFacebook} />
      <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" name="LinkedIn" image={imgLinkedin} />
      <SocialMediaElem href="https://github.com/coded-bear" name="GitHub" image={imgGithub} />
      <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" name="Instagram" image={imgInstagram} />
    </StyledSocialMedia>

    <p>
      <Link href="" as="" prefetch={false}>
        <a>Privacy Policy</a>
      </Link>
    </p>

    <p>&copy; {new Date().getFullYear()} Łukasz Warchoł. All rights reserved</p>
  </StyledFooter>
);

export default Footer;
