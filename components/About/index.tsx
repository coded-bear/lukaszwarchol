import React from "react";
import { NextPage } from "next";
import { StyledAbout, StyledAboutImage, StyledAboutContent } from "../../styled/about";
import { getLang } from "../../utils/langService";
import { Title, Heading, LinkButton } from "../elements";
import Experience from "./Experience";
import Technologies from "./Technologies";

import imgMe from "../../static/images/about/me.jpg";

const About: NextPage<{ t: any; lang: string }> = ({ t, lang }) => (
  <>
    <Title text={t.title} />

    <StyledAbout>
      <StyledAboutImage>
        <img src={imgMe} alt="Łukasz Warchoł" />
      </StyledAboutImage>

      <StyledAboutContent>
        <Heading left text={t.title} />

        {t.description.map((elem: string, index: number) => (
          <p key={index}>{elem}</p>
        ))}

        <LinkButton href="/contact" as={`/${lang}/contact`} text={t.hireMe} />
      </StyledAboutContent>
    </StyledAbout>

    <Experience t={t.experience} />

    <Technologies t={t.technologies} />
  </>
);

About.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/about.json`);
  return { t, lang };
};

export default About;
