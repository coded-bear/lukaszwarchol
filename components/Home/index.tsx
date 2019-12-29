import React from "react";
import {
  StyledHomeHeader,
  StyledHomeHeaderContent,
  StyledHomeHeaderRight,
  SocialMediaHomeHeaderBox
} from "../../styled/home";
import { Title, LinkButton, SocialMedia } from "../elements";
import HomQuestions from "./HomeQuestions";
import HomeNumbers from "./HomeNumbers";
import { checkLang } from "../../utils/checkLang";

const Home = ({ lang }: { lang: string }) => (
  <>
    <Title text="JavaScript Software Developer" />

    <StyledHomeHeader>
      <StyledHomeHeaderContent>
        <p>Hello - {lang}</p>
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

Home.getInitialProps = async ({ asPath }: { asPath: string }) => {
  const lang: string = await checkLang(asPath.split("/")[1]);
  return { lang };
};
