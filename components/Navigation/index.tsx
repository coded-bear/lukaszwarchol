import React from "react";
import Link from "next/link";
import { SocialMedia } from "../elements";
import { NavElemProps } from "./interfaces";
import { StyledNavigation, StyledNavigationSocialMedia } from "../../styled/header";

import imgClose from "../../static/images/common/close.svg";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <a>
      <li>{props.text}</li>
    </a>
  </Link>
);

const Navigation: React.FC = () => (
  <StyledNavigation>
    <button>
      <img src={imgClose} alt="close" />
    </button>

    <nav>
      <ul>
        <NavElem href="/home" as="/" text="Home" />
        <NavElem href="/about" as="/about" text="About" />
        <NavElem href="/services" as="/services" text="Services" />
        <NavElem href="/projects" as="/projects" text="Projects" />
        <NavElem href="/contact" as="/contact" text="Contact" />
      </ul>
    </nav>

    <StyledNavigationSocialMedia>
      <SocialMedia />
    </StyledNavigationSocialMedia>
  </StyledNavigation>
);

export default Navigation;
