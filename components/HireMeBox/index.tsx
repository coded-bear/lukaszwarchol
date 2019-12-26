import React from "react";
import { LinkButton } from "../elements";
import { Container } from "../../styled/global";
import { StyledHireMeBox } from "../../styled/layout";

const HireMeBox: React.FC = () => (
  <StyledHireMeBox>
    <Container>
      <h2>Have Any Project in Mind?</h2>

      <LinkButton text="Hire Me" href="/contact" as="/contact" />
    </Container>
  </StyledHireMeBox>
);

export default HireMeBox;
