import React from "react";
import { GlobalStyle } from "../../styled/global";
import Header from "../header";
import HireMeBox from "../hireMeBox";
import Footer from "../footer";

const Layout = ({ children, lang, t }) => (
  <>
    <GlobalStyle />

    <Header lang={lang} t={t} />

    <main>
      {children}

      <HireMeBox lang={lang} t={t} />
    </main>

    <Footer lang={lang} t={t} />
  </>
);

export default Layout;
