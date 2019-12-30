import React from "react";
import { Heading, SubTitle } from "../../elements";
import { StyledExperiences, StyledExperienceBox, StyledExperienceElem } from "../../../styled/about";
import { Container } from "../../../styled/layout";

const Experiences: React.FC<{ t: any }> = ({ t }) => (
  <StyledExperiences>
    <Container>
      <Heading text={t.title} />
      <SubTitle text={t.subtitle} />

      <StyledExperienceBox>
        {t.boxes.map((elem: any, index: number) => (
          <StyledExperienceElem key={index}>
            <p className="date">{elem.date}</p>
            <h4>{elem.title}</h4>
            <p>{elem.description}</p>
          </StyledExperienceElem>
        ))}
      </StyledExperienceBox>
    </Container>
  </StyledExperiences>
);

export default Experiences;
