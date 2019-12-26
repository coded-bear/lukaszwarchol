import { createGlobalStyle } from "styled-components";
import * as colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    color: ${colors.PRIMARY_TEXT};
    font-family: 'Raleway', sans-serif;
    font-size: 16px;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 25%;
      height: 50vh;
      background-color: ${colors.PRIMARY_YELLOW};
      z-index: -1;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${colors.PRIMARY_TEXT};
    text-decoration: none;
  }

  p {
    line-height: 22px;
  }
  
  span {
    color: ${colors.PRIMARY_YELLOW};
  }
`;
