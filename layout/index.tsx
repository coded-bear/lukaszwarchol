import React from "react";
import Header from "../components/Header";
import HireMeBox from "../components/HireMeBox";
import Footer from "../components/Footer";
import { LayoutProps } from "./interfaces";
import { GlobalStyle } from "../styled/global";

const Layout: React.FC<LayoutProps> = props => (
  <>
    <GlobalStyle />

    <Header lang={props.lang} pathname={props.pathname} asPath={props.asPath} />

    <main>
      {props.children}

      <HireMeBox />
    </main>

    <Footer />
  </>
);

export default Layout;
