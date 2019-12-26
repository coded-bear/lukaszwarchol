import { createGlobalStyle } from "styled-components";
import * as colors from "./colors";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${colors.PRIMARY_TEXT};
    font-size: 18px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  span {
    color: ${colors.PRIMARY_YELLOW};
  }
`;
