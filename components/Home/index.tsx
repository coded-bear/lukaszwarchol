import React from "react";
import { NextPage } from "next";
import { getLang } from "../../utils/langService";
import {
  StyledHomeHeader,
  StyledHomeHeaderContent,
  StyledHomeHeaderRight,
  SocialMediaHomeHeaderBox
} from "../../styled/home";
import { Title, LinkButton, SocialMedia } from "../elements";
import HomQuestions from "./HomeQuestions";
import HomeNumbers from "./HomeNumbers";

const Home: NextPage<{ t: any }> = ({ t }) => (
  <>
    <Title text="JavaScript Software Developer" />

    <StyledHomeHeader>
      <StyledHomeHeaderContent>
        <p>{t.header.hello}</p>
        <h3>
          <span>
            <strong>I'm Lucas</strong>
          </span>
        </h3>
        <p>
          <strong>JavaScript Software Developer</strong>
        </p>

        <LinkButton href="/contact" as="/contact" text="Hire me" />
      </StyledHomeHeaderContent>

      <StyledHomeHeaderRight></StyledHomeHeaderRight>

      <SocialMediaHomeHeaderBox>
        <SocialMedia />
      </SocialMediaHomeHeaderBox>
    </StyledHomeHeader>

    <HomQuestions />

    <HomeNumbers />
  </>
);

export default Home;

Home.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/home.json`);
  return { t };
};
