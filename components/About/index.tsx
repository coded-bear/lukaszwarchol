import React from "react";
import { NextPage } from "next";
import { StyledAbout, StyledAboutImage, StyledAboutContent } from "../../styled/about";
import { getLang } from "../../utils/langService";
import { Title, Heading, LinkButton } from "../elements";
import Experiences from "./Experiences";
import Technologies from "./Technologies";

const About: NextPage<{ t: any; lang: string }> = ({ t, lang }) => (
  <>
    <Title text={t.title} />

    <StyledAbout>
      <StyledAboutImage></StyledAboutImage>

      <StyledAboutContent>
        <Heading left text={t.title} />

        {t.description.map((elem: string, index: number) => (
          <p key={index}>{elem}</p>
        ))}

        <LinkButton href="/contact" as={`/${lang}/contact`} text={t.hireMe} />
      </StyledAboutContent>
    </StyledAbout>

    <Experiences t={t.experiences} />

    <Technologies t={t.technologies} />
  </>
);

About.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/about.json`);
  return { t, lang };
};

export default About;
