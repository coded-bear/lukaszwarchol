import React from "react";
import Link from "next/link";
import { SocialMedia } from "../elements";
import { NavElemProps } from "./interfaces";
import { StyledFooter } from "../../styled/footer";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <a>
      <li>{props.text}</li>
    </a>
  </Link>
);

const Footer: React.FC = () => (
  <StyledFooter>
    <nav>
      <ul>
        <NavElem href="/home" as="/" text="Home" />
        <NavElem href="/about" as="/about" text="About" />
        <NavElem href="/services" as="/services" text="Services" />
        <NavElem href="/projects" as="/projects" text="Projects" />
        <NavElem href="/contact" as="/contact" text="Contact" />
      </ul>
    </nav>

    <SocialMedia />

    <p>
      <Link href="/privacyPolicy" as="privacy-policy" prefetch={false}>
        <a>Privacy Policy</a>
      </Link>
    </p>

    <p>&copy; {new Date().getFullYear()} Łukasz Warchoł. All rights reserved</p>
  </StyledFooter>
);

export default Footer;
