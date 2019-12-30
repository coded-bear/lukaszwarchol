import React from "react";
import Link from "next/link";
import { SocialMedia } from "../elements";
import { NavigationProps, NavElemProps } from "./interfaces";
import { StyledNavigation, StyledNavigationSocialMedia } from "../../styled/header";

import imgClose from "../../static/images/common/close.svg";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <a>
      <li>{props.text}</li>
    </a>
  </Link>
);

const Navigation: React.FC<NavigationProps> = props => (
  <StyledNavigation>
    <button>
      <img src={imgClose} alt="close" />
    </button>

    <nav>
      <ul>
        <NavElem href="/home" as={`/${props.lang}/`} text="Home" />
        <NavElem href="/about" as={`/${props.lang}/about`} text={props.t.nav.about} />
        <NavElem href="/services" as={`/${props.lang}/services`} text={props.t.nav.services} />
        <NavElem href="/projects" as={`/${props.lang}/projects`} text={props.t.nav.projects} />
        <NavElem href="/contact" as={`/${props.lang}/contact`} text={props.t.nav.contact} />
      </ul>
    </nav>

    <StyledNavigationSocialMedia>
      <SocialMedia />
    </StyledNavigationSocialMedia>
  </StyledNavigation>
);

export default Navigation;
