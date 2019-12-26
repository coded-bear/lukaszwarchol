import React from "react";
import Link from "next/link";
import { SocialMedia } from "../elements";
import { NavElemProps } from "./interfaces";

import imgClose from "../../static/images/common/close.svg";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <li>
      <a>{props.text}</a>
    </li>
  </Link>
);

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <button>
        <img src={imgClose} alt="close" />
      </button>

      <NavElem href="/home" as="/" text="Home" />
      <NavElem href="/about" as="/about" text="About" />
      <NavElem href="/services" as="/services" text="Services" />
      <NavElem href="/projects" as="/projects" text="Projects" />
      <NavElem href="/contact" as="/contact" text="Contact" />

      <SocialMedia />
    </ul>
  </nav>
);

export default Navigation;
