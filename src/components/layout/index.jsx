import React from "react";
import { GlobalStyle } from "../../styled/global";
import Header from "../Header";
import HireMeBox from "../HireMeBox";
import Footer from "../Footer";

const Layout = ({ children, lang, path, t }) => (
  <>
    <GlobalStyle />

    <Header lang={lang} path={path} t={t} />

    <main>
      {children}

      <HireMeBox lang={lang} t={t} />
    </main>

    <Footer lang={lang} t={t} />
  </>
);

export default Layout;
