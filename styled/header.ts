import styled from "styled-components";
import * as colors from "./colors";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  padding: 20px;
`;

export const StyledLogo = styled.h1`
  margin: 0;

  img {
    height: 70px;
  }
`;

export const StyledHeaderRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
`;

export const StyledLangBtns = styled.div`
  a {
    margin: 0 5px;
    font-size: 18px;
    text-transform: uppercase;

    &.active {
      font-weight: bold;
    }
  }
`;

export const StyledMenuBtn = styled.button`
  margin-left: 25px;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  img {
    height: 28px;
  }
`;

export const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100vh;
  background-color: ${colors.PRIMARY_YELLOW};
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  z-index: 10;
  transition: 0.5s;

  &.open {
    left: 0;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;

    img {
      height: 70px;
    }
  }

  nav {
    ul {
      margin: 40px 0;
      padding-left: 0;
      list-style: none;

      li {
        margin: 15px;
        padding: 5px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const StyledNavigationSocialMedia = styled.div`
  img {
    height: 40px !important;
    margin: 0 5px;
  }
`;
