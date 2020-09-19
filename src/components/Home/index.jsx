import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SEO from "../seo";
import "../../styles/pages/home.scss";
import MainLayout from "../../layouts/MainLayout";
import LinkButton from "../common/LinkButton";
import SocialMedia from "../common/SocialMedia";
import { getHrefs } from "../../utils/langService";
import gsap from "gsap";
import Landscape from "../../images/common/landscape.svg";
import Numbers from "../Numbers";

const Home = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  const landscapeWrapper = useRef(null);

  useEffect(() => {
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
              <span>JavaScript Software Developer</span>
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
