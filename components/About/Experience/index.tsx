import React from "react";
import { Heading, SubTitle } from "../../elements";
import { StyledExperience, StyledExperienceBox, StyledExperienceElem } from "../../../styled/about";
import { Container } from "../../../styled/layout";

const Experience: React.FC<{ t: any }> = ({ t }) => (
  <StyledExperience>
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
  </StyledExperience>
);

export default Experience;
