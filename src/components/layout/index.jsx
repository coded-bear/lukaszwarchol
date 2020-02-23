import React from "react";
import PropTypes from "prop-types";
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Layout;
