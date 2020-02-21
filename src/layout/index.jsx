import React from "react";
import { GlobalStyle } from "../styled/global";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />

    <main>{children}</main>
  </>
);

export default Layout;
