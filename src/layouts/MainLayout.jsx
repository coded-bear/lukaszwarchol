import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CookiesInfo from "../components/CookiesInfo";
import Cookies from "js-cookie";
import { useScrollPosition } from "../utils/useScrollPosition";

const MainLayout = ({ children, lang, path, t }) => {
  const [cookiesInfo, setCookiesInfo] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  const headerMove = hideOnScroll => {
    const header = document.querySelector(".Header");

    if (!hideOnScroll && !header.classList.contains("move")) header.classList.add("move");
    else header.classList.remove("move");
  };

  useEffect(() => {
    headerMove(hideOnScroll);
  }, [hideOnScroll]);

  useEffect(() => {
    const ca = Cookies.get("ca");
    if (!ca) setCookiesInfo(true);
  }, []);

  const closeCookiesInfo = useCallback(() => {
    Cookies.set("ca", true, { expires: 365 });
    setCookiesInfo(false);
  }, [setCookiesInfo]);

  return (
    <>
      <Header lang={lang} path={path} t={t} />

      <main>{children}</main>

      <Footer lang={lang} t={t.footer} path={path} />

      {cookiesInfo && <CookiesInfo lang={lang} t={t.cookiesInfo} close={closeCookiesInfo} />}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default MainLayout;
