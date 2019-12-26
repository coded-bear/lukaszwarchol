import React from "react";
import { Heading, SubTitle } from "../../elements";
import { ExperienceElemProps } from "../interface";
import { StyledExperiences, StyledExperienceBox, StyledExperienceElem } from "../../../styled/about";
import { Container } from "../../../styled/layout";

const ExperienceElem: React.FC<ExperienceElemProps> = props => (
  <StyledExperienceElem>
    <p className="date">{props.date}</p>
    <h4>{props.title}</h4>
    <p>{props.text}</p>
  </StyledExperienceElem>
);

const Experiences: React.FC = () => (
  <StyledExperiences>
    <Container>
      <Heading text="Work Experiences" />
      <SubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" />

      <StyledExperienceBox>
        <ExperienceElem
          date="June 2016 - March 2017"
          title="Front-end Developer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ExperienceElem
          date="June 2016 - March 2017"
          title="Front-end Developer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ExperienceElem
          date="June 2016 - March 2017"
          title="Front-end Developer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ExperienceElem
          date="June 2016 - March 2017"
          title="Front-end Developer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ExperienceElem
          date="June 2016 - March 2017"
          title="Front-end Developer"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </StyledExperienceBox>
    </Container>
  </StyledExperiences>
);

export default Experiences;
