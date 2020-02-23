import React from "react";
import SEO from "../seo";
import Layout from "../layout";
import { StyledAbout, StyledAboutImage, StyledAboutContent } from "../../styled/about";
import { Heading, LinkButton } from "../elements";
import Experience from "./Experience";
import Technologies from "./Technologies";
import imgMe from "../../images/about/me.jpg";

const About = ({ pageContext }) => {
  const { t, lang, layoutT } = pageContext;

  return (
    <Layout t={layoutT} lang={lang}>
      <SEO title={t.title} lang={lang} />

      <StyledAbout>
        <StyledAboutImage>
          <img src={imgMe} alt="Łukasz Warchoł" />
        </StyledAboutImage>

        <StyledAboutContent>
          <Heading left text={t.title} />

          {t.description.map((elem, index) => (
            <p key={index}>{elem}</p>
          ))}

          <LinkButton to={`/${lang}/contact/`} text={t.hireMe} />
        </StyledAboutContent>
      </StyledAbout>

      <Experience t={t.experience} />

      <Technologies t={t.technologies} />
    </Layout>
  );
};

export default About;
