import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import SocialMedia from "./common/SocialMedia";
import gsap from "gsap";
import { getHrefs } from "../utils/langService";
import imgClose from "../images/common/close.svg";

const NavElem = ({ to, name, closeMenu }) => (
  <li>
    <Link to={to} onClick={closeMenu}>
      {name}
    </Link>
  </li>
);

const Navigation = ({ lang, t, closeMenu }) => {
  const navigation = useRef(null);

  useEffect(() => {
    const nav = navigation.current;

    gsap.set([nav], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(nav, { y: "-=70" }, { duration: 1, y: "+=70", autoAlpha: 1, opacity: 1 });
  }, []);

  return (
    <div className="navigation">
      <button onClick={closeMenu}>
        <img src={imgClose} alt="close" />
      </button>

      <nav ref={navigation}>
        <ul>
          <NavElem to={`/${lang}/`} name="Home" closeMenu={closeMenu} />
          <NavElem to={`/${lang}/${getHrefs(lang)[0]}/`} name={t.about} closeMenu={closeMenu} />
          <NavElem to={`/${lang}/${getHrefs(lang)[1]}/`} name={t.services} closeMenu={closeMenu} />
          <NavElem to={`/${lang}/${getHrefs(lang)[2]}/`} name={t.projects} closeMenu={closeMenu} />
          <NavElem to={`/${lang}/${getHrefs(lang)[3]}/`} name={t.contact} closeMenu={closeMenu} />
        </ul>
      </nav>

      <div className="navigation__social-media">
        <SocialMedia />
      </div>
    </div>
  );
};

NavElem.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
};

Navigation.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default Navigation;
