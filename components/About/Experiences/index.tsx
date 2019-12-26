import React from "react";
import { Heading, SubTitle } from "../../elements";
import { StyledExperiences } from "../../../styled/about";
import { Container } from "../../../styled/layout";

const Experiences: React.FC = () => (
  <StyledExperiences>
    <Container>
      <Heading text="Work Experiences" />
      <SubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" />

      <div></div>
    </Container>
  </StyledExperiences>
);

export default Experiences;
