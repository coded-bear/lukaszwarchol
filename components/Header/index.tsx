import React from "react";
import Link from "next/link";
import Navigation from "../Navigation";
import { StyledHeader, StyledLogo, StyledHeaderRightBox, StyledLangBtns, StyledMenuBtn } from "../../styled/header";

import logo from "../../static/images/common/logo.svg";
import imgMenu from "../../static/images/common/menu.svg";

const Header: React.FC = () => (
  <StyledHeader>
    <StyledLogo>
      <Link href="/home" as="/" prefetch={false}>
        <a>
          <img src={logo} alt="Łukasz Warchoł" />
        </a>
      </Link>
    </StyledLogo>

    <StyledHeaderRightBox>
      <StyledLangBtns>
        <Link href="/home" as="/" prefetch={false}>
          <a>PL</a>
        </Link>
        <Link href="/home" as="/" prefetch={false}>
          <a>EN</a>
        </Link>
      </StyledLangBtns>

      <StyledMenuBtn>
        <img src={imgMenu} alt="menu" />
      </StyledMenuBtn>
    </StyledHeaderRightBox>

    <Navigation />
  </StyledHeader>
);

export default Header;
