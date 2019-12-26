import React from "react";
import Link from "next/link";
import { NavElemProps } from "./interfaces";
import { StyledFooter } from "../../styled/footer";

const NavElem: React.FC<NavElemProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <li>
      <a>{props.text}</a>
    </li>
  </Link>
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

    <div>{/* social media */}</div>

    <p>
      <Link href="" as="" prefetch={false}>
        <a>Privacy Policy</a>
      </Link>
    </p>

    <p>&copy; {new Date().getFullYear()} Łukasz Warchoł. All rights reserved</p>
  </StyledFooter>
);

export default Footer;
