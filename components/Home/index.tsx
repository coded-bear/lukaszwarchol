import React from "react";
import { NextPage } from "next";
import {
  StyledHomeHeader,
  StyledHomeHeaderContent,
  StyledHomeHeaderRight,
  SocialMediaHomeHeaderBox
} from "../../styled/home";
import { getLang } from "../../utils/langService";
import { Title, LinkButton, SocialMedia } from "../elements";
import HomQuestions from "./HomeQuestions";
import HomeNumbers from "./HomeNumbers";

const Home: NextPage<{ t: any; lang: string }> = ({ t, lang }) => (
  <>
    <Title text="JavaScript Software Developer" />

    <StyledHomeHeader>
      <StyledHomeHeaderContent>
        <p>{t.header.hello}</p>
        <h3>
          <span>
            <strong>{t.header.Im}</strong>
          </span>
        </h3>
        <p>
          <strong>JavaScript Software Developer</strong>
        </p>

        <LinkButton href="/contact" as={`/${lang}/contact`} text={t.header.hireMe} />
      </StyledHomeHeaderContent>

      <StyledHomeHeaderRight></StyledHomeHeaderRight>

      <SocialMediaHomeHeaderBox>
        <SocialMedia />
      </SocialMediaHomeHeaderBox>
    </StyledHomeHeader>

    <HomQuestions t={t.questions} lang={lang} />

    <HomeNumbers t={t.numbers} />
  </>
);

export default Home;

Home.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/home.json`);
  return { t, lang };
};
