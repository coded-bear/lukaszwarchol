import React, { forwardRef } from "react";
import Link from "next/link";
import { SocialMedia } from "../elements";
import { NavigationProps, NavElemProps } from "./interfaces";
import { StyledNavigation, StyledNavigationSocialMedia } from "../../styled/header";

import imgClose from "../../static/images/common/close.svg";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <a>
      <li onClick={props.closeMenu}>{props.text}</li>
    </a>
  </Link>
);

const Navigation: React.FC<NavigationProps> = forwardRef((props, ref) => (
  <StyledNavigation ref={ref}>
    <button onClick={props.closeMenu}>
      <img src={imgClose} alt="close" />
    </button>

    <nav>
      <ul>
        <NavElem href="/home" as={`/${props.lang}/`} text="Home" closeMenu={props.closeMenu} />
        <NavElem href="/about" as={`/${props.lang}/about-me`} text={props.t.nav.about} closeMenu={props.closeMenu} />
        <NavElem
          href="/services"
          as={`/${props.lang}/services`}
          text={props.t.nav.services}
          closeMenu={props.closeMenu}
        />
        <NavElem
          href="/projects"
          as={`/${props.lang}/projects`}
          text={props.t.nav.projects}
          closeMenu={props.closeMenu}
        />
        <NavElem href="/contact" as={`/${props.lang}/contact`} text={props.t.nav.contact} closeMenu={props.closeMenu} />
      </ul>
    </nav>

    <StyledNavigationSocialMedia>
      <SocialMedia />
    </StyledNavigationSocialMedia>
  </StyledNavigation>
));

export default Navigation;
