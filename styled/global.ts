import { createGlobalStyle } from "styled-components";
import * as colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.PRIMARY_TEXT};
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    color: ${colors.PRIMARY_TEXT};
    text-decoration: none;
  }
  
  span {
    color: ${colors.PRIMARY_YELLOW};
  }
`;
