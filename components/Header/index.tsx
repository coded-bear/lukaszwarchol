import React from "react";
import Link from "next/link";
import Navigation from "../Navigation";
import { StyledHeader, StyledLogo, StyledHeaderRightBox, StyledLangBtns, StyledMenuBtn } from "../../styled/header";
import { HeaderProps } from "./interfaces";
import { langsList, changePath } from "../../utils/langService";

import logo from "../../static/images/common/logo.svg";
import imgMenu from "../../static/images/common/menu.svg";

const Header: React.FC<HeaderProps> = props => (
  <StyledHeader>
    <StyledLogo>
      <Link href="/home" as={`/${props.lang}`} prefetch={false}>
        <a>
          <img src={logo} alt="Łukasz Warchoł" />
        </a>
      </Link>
    </StyledLogo>

    <StyledHeaderRightBox>
      <StyledLangBtns>
        {langsList.map((lang, index) => (
          <Link key={index} href={props.pathname} as={changePath(props.asPath, lang)} prefetch={false}>
            <a className={lang === props.lang ? "active" : ""}>{lang}</a>
          </Link>
        ))}
      </StyledLangBtns>

      <StyledMenuBtn>
        <img src={imgMenu} alt="menu" />
      </StyledMenuBtn>
    </StyledHeaderRightBox>

    <Navigation />
  </StyledHeader>
);

export default Header;
