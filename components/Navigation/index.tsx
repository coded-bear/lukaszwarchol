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

      <NavElem href="" as="" text="Home" />
      <NavElem href="" as="" text="About" />
      <NavElem href="" as="" text="Services" />
      <NavElem href="" as="" text="Projects" />
      <NavElem href="" as="" text="Contact" />

      <SocialMedia />
    </ul>
  </nav>
);

export default Navigation;
