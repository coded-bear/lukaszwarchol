import React from "react";
import Link from "next/link";
import { SocialMedia } from "../elements";
import { FooterProps, NavElemProps } from "./interfaces";
import { StyledFooter } from "../../styled/footer";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <a>
      <li>{props.text}</li>
    </a>
  </Link>
);

const Footer: React.FC<FooterProps> = props => (
  <StyledFooter>
    <nav>
      <ul>
        <NavElem href="/home" as={`/${props.lang}`} text="Home" />
        <NavElem href="/about" as={`/${props.lang}/about`} text={props.t.nav.about} />
        <NavElem href="/services" as={`/${props.lang}/services`} text={props.t.nav.services} />
        <NavElem href="/projects" as={`/${props.lang}/projects`} text={props.t.nav.projects} />
        <NavElem href="/contact" as={`/${props.lang}/contact`} text={props.t.nav.contact} />
      </ul>
    </nav>

    <SocialMedia />

    <p>
      <Link href="/privacyPolicy" as={`/${props.lang}/privacy-policy`} prefetch={false}>
        <a>{props.t.privacyPolicy}</a>
      </Link>
    </p>

    <p>
      &copy; {new Date().getFullYear()} Łukasz Warchoł. {props.t.rights}
    </p>
  </StyledFooter>
);

export default Footer;
