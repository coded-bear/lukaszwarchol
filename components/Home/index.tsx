import React from "react";
import {
  StyledHomeHeader,
  StyledHomeHeaderContent,
  StyledHomeHeaderRight,
  SocialMediaHomeHeaderBox
} from "../../styled/home";
import { Title, LinkButton, SocialMedia } from "../elements";

const Home: React.FC = () => (
  <>
    <Title text="JavaScript Software Developer" />

    <StyledHomeHeader>
      <StyledHomeHeaderContent>
        <p>Hello</p>
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
  </>
);

export default Home;
