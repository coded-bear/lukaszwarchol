import React from "react";
import { Heading, LinkButton } from "../elements";
import { Container } from "../../styled/layout";
import { StyledHireMeBox } from "../../styled/layout";

const HireMeBox: React.FC = () => (
  <StyledHireMeBox>
    <Container>
      <Heading dark left text="Have Any Project in Mind?" />

      <LinkButton light href="/contact" as="/contact" text="Hire Me" />
    </Container>
  </StyledHireMeBox>
);

export default HireMeBox;
