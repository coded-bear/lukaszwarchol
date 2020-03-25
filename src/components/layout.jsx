import React from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import Header from "./Header";
import { HireMeBox } from "./elements";
import Footer from "./Footer";
import CookiesInfo from "./CookiesInfo";

const Layout = ({ children, lang, path, t }) => (
  <>
    <Header lang={lang} path={path} t={t} />

    <main>
      {children}

      <HireMeBox lang={lang} t={t} />
    </main>

    <Footer lang={lang} t={t} />

    <CookiesInfo lang={lang} t={t.cookiesInfo} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Layout;
