import React from "react";
import Link from "next/link";
import { NavElemProps } from "./interfaces";

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
      <button>{/* close */}</button>

      <NavElem href="" as="" text="Home" />
      <NavElem href="" as="" text="About" />
      <NavElem href="" as="" text="Services" />
      <NavElem href="" as="" text="Projects" />
      <NavElem href="" as="" text="Contact" />

      <div>{/* social media */}</div>
    </ul>
  </nav>
);

export default Navigation;
