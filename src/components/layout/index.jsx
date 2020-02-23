import React from "react";
import { GlobalStyle } from "../../styled/global";
import HireMeBox from "../hireMeBox";
import Footer from "../footer";

const Layout = ({ children, lang, t }) => (
  <>
    <GlobalStyle />

    <main>
      {children}

      <HireMeBox lang={lang} t={t} />
    </main>

    <Footer lang={lang} t={t} />
  </>
);

export default Layout;
