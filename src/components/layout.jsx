import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import Header from "./Header";
import { HireMeBox } from "./elements";
import Footer from "./Footer";
import CookiesInfo from "./CookiesInfo";
import Cookies from "js-cookie";
import { useState } from "react";

const Layout = ({ children, lang, path, t }) => {
  const [cookiesInfo, setCookiesInfo] = useState(false);

  useEffect(() => {
    const ca = Cookies.get("ca");
    if (!ca) setCookiesInfo(true);
  }, []);

  const closeCookiesInfo = () => {
    Cookies.set("ca", true, { expires: 365 });
    setCookiesInfo(false);
  };

  return (
    <>
      <Header lang={lang} path={path} t={t} />

      <main>
        {children}

        <HireMeBox lang={lang} t={t} />
      </main>

      <Footer lang={lang} t={t} />

      {cookiesInfo && <CookiesInfo lang={lang} t={t.cookiesInfo} close={closeCookiesInfo} />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Layout;
