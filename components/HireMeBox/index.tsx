import React from "react";
import { Heading, LinkButton } from "../elements";
import { Container } from "../../styled/layout";
import { StyledHireMeBox } from "../../styled/layout";

const HireMeBox: React.FC = () => (
  <StyledHireMeBox>
    <Container>
      <Heading dark left text="Have Any Project in Mind?" />

      <LinkButton text="Hire Me" href="/contact" as="/contact" />
    </Container>
  </StyledHireMeBox>
);

export default HireMeBox;
