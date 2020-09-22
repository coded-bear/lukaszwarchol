import React, { useEffect, useRef } from "react";
import "../../styles/pages/home.scss";
import PropTypes from "prop-types";
import SEO from "../seo";
import MainLayout from "../../layouts/MainLayout";
import SocialMedia from "../common/SocialMedia";
import Numbers from "../Numbers";
import LinkButton from "../common/LinkButton";
import { getHrefs } from "../../utils/langService";
import gsap from "gsap";
import { contentWriter } from "../../utils/contentWriter";

import Landscape from "../../images/common/landscape.svg";

const Home = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  const landscapeWrapper = useRef(null);

  useEffect(() => {
    const writer = document.querySelector(".writer");
    contentWriter({ destination: writer, textList: t.hero.textList, time: 80 });

    const [elements] = landscapeWrapper.current.children;

    const mountains = elements.getElementById("mountains");
    const tree = elements.getElementById("tree");
    const plants = elements.getElementById("plants");
    const sunshine = elements.getElementById("sunshine");
    const cloud1 = elements.getElementById("cloud1");
    const cloud2 = elements.getElementById("cloud2");

    gsap.set([mountains, tree, plants, sunshine, cloud1, cloud2], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.to(mountains, { duration: 0.5, autoAlpha: 1 })
      .fromTo(tree, { y: "+=200", scaleY: 0 }, { duration: 1, y: "-=200", scaleY: 1, autoAlpha: 1 }, "-=0.5")
      .fromTo(plants, { y: "+=100", scaleY: 0 }, { duration: 1, y: "-=100", scaleY: 1, autoAlpha: 1 }, "-=0.5")
      .fromTo(sunshine, { x: "+=100", y: "+=400" }, { duration: 3, x: "-=100", y: "-=400", autoAlpha: 1 }, "-=1")
      .fromTo(cloud1, { x: "-=150" }, { duration: 1.5, x: "+=150", autoAlpha: 1 }, "-=1")
      .fromTo(cloud2, { x: "+=150" }, { duration: 1.5, x: "-=150", autoAlpha: 1 }, "-=0.5");
  }, []);

  return (
    <MainLayout lang={lang} path={path} t={layoutT}>
      <SEO title="JavaScript Software Developer" lang={lang} />

      <div className="Home">
        <section className="container Home__hero">
          <div className="Home__hero--content">
            <h2>{t.hero.hello}</h2>
            <h2>
              <span className="writer"></span>
            </h2>
            <p className="description">{t.hero.description}</p>

            <LinkButton to={`/${lang}/${getHrefs(lang)[3]}/`}>{t.hero.contactMe}</LinkButton>

            <SocialMedia />
          </div>

          <div ref={landscapeWrapper} className="Home__hero--right">
            <Landscape className="Home__hero--landscape" />
          </div>
        </section>

        <Numbers t={t.numbers} />
      </div>
    </MainLayout>
  );
};

Home.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Home;
