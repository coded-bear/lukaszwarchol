import React from "react";
import { Title, Heading, LinkButton } from "../elements";
import { StyledAbout, StyledAboutImage, StyledAboutContent } from "../../styled/about";

const About: React.FC = () => (
  <>
    <Title text="About Me" />

    <StyledAbout>
      <StyledAboutImage></StyledAboutImage>

      <StyledAboutContent>
        <Heading left text="About Me" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

        <LinkButton href="/contact" as="/contact" text="Hire me" />
      </StyledAboutContent>
    </StyledAbout>
  </>
);

export default About;
