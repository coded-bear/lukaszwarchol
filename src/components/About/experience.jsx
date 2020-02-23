import React from "react";
import PropTypes from "prop-types";
import { Heading, SubTitle } from "../elements";
import { StyledExperience, StyledExperienceBox, StyledExperienceElem } from "../../styled/about";
import { Container } from "../../styled/layout";

const Experience = ({ t }) => (
  <StyledExperience>
    <Container>
      <Heading text={t.title} />
      <SubTitle text={t.subtitle} />

      <StyledExperienceBox>
        {t.boxes.map((elem, index) => (
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

Experience.propTypes = {
  t: PropTypes.object.isRequired
};

export default Experience;
