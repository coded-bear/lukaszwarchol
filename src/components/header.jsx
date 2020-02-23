import React, { useEffect, useState, createRef } from "react";
import { Link } from "gatsby";
import Navigation from "./navigation";
import { StyledHeader, StyledLogo, StyledHeaderRightBox, /*StyledLangBtns,*/ StyledMenuBtn } from "../styled/header";
// import { langsList, changePath } from "../../utils/langService";
import logo from "../images/common/logo.svg";
import imgMenu from "../images/common/menu.svg";

// const LangBtns = props => (
//   <StyledLangBtns>
//     {langsList.map((lang, index) => (
//       <Link key={index} to={changePath(props.asPath, lang)}>
//         <p className={lang === props.lang ? "active" : ""}>{lang}</p>
//       </Link>
//     ))}
//   </StyledLangBtns>
// );

const Header = ({ lang, t }) => {
  const ref = createRef();
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) ref.current.classList.add("open");
    else ref.current.classList.remove("open");
  }, [menu, ref]);

  return (
    <StyledHeader>
      <StyledLogo>
        <Link to={`/${lang}/`}>
          <img src={logo} alt="Łukasz Warchoł" />
        </Link>
      </StyledLogo>
      <StyledHeaderRightBox>
        {/* <LangBtns pathname={props.pathname} asPath={props.asPath} lang={lang} /> */}

        <StyledMenuBtn onClick={() => setMenu(true)}>
          <img src={imgMenu} alt="menu" />
        </StyledMenuBtn>
      </StyledHeaderRightBox>

      <Navigation ref={ref} closeMenu={() => setMenu(false)} t={t.nav} lang={lang} />
    </StyledHeader>
  );
};

export default Header;
