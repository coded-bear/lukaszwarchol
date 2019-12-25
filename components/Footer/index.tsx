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

const Footer: React.FC = () => (
  <footer>
    <div>{/* social media */}</div>

    <nav>
      <ul>
        <NavElem href="" as="" text="Home" />
        <NavElem href="" as="" text="About" />
        <NavElem href="" as="" text="Services" />
        <NavElem href="" as="" text="Projects" />
        <NavElem href="" as="" text="Contact" />
      </ul>
    </nav>

    <p>
      <Link href="" as="" prefetch={false}>
        <a>Privacy Policy</a>
      </Link>
    </p>

    <p>
      &copy; {new Date().getFullYear()} <span>Łukasz Warchoł</span>. All rights reserved
    </p>
  </footer>
);

export default Footer;
