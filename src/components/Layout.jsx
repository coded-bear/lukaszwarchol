import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "../styles/main.scss";
import Header from "./Header";
import Footer from "./Footer";
import MobileNavigation from "./MobileNavigation";
import CookiesInfo from "./CookiesInfo";
import Cookies from "js-cookie";
import { useScrollPosition } from "../utils/useScrollPosition";

const Layout = ({ children, lang, path, t }) => {
  const [cookiesInfo, setCookiesInfo] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y > -200) return setHideOnScroll(true);
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
    if (!mobileNav && document.body.classList.contains("openedMobileMenu")) document.body.classList.remove("openedMobileMenu");
  }, [mobileNav]);

  useEffect(() => {
    const ca = Cookies.get("ca");
    if (!ca) setCookiesInfo(true);
  }, []);

  const closeCookiesInfo = useCallback(() => {
    Cookies.set("ca", true, { expires: 365 });
    setCookiesInfo(false);
  }, [setCookiesInfo]);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);

    document.querySelector(".MobileNavigation").classList.toggle("open");
    document.querySelector(".Header").classList.toggle("openedMobileMenu");
    document.body.classList.toggle("openedMobileMenu");
  };

  return (
    <div className="Layout">
      <Header lang={lang} path={path} t={t} toggleMobileNav={toggleMobileNav} />
      <MobileNavigation lang={lang} t={{ ...t.nav, estimate: t.estimate }} path={path} />

      <main>
        <div className="Layout__wrapper">{children}</div>
      </main>

      <Footer lang={lang} t={t.footer} path={path} />

      {cookiesInfo && <CookiesInfo lang={lang} t={t.cookiesInfo} close={closeCookiesInfo} />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Layout;
