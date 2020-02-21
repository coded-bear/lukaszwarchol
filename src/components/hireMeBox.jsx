import React from "react";
import { Container, StyledHireMeBox } from "../styled/layout";
import { Heading, LinkButton } from "./elements";

const HireMeBox = ({ t, lang }) => (
  <StyledHireMeBox>
    <Container>
      <Heading dark left text={t.havaAnyProject} />

      <LinkButton light to={`/${lang}/contact/`} text={t.hireMe} />
    </Container>
  </StyledHireMeBox>
);

export default HireMeBox;
