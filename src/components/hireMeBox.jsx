import React from "react";
import { Container, StyledHireMeBox } from "../styled/layout";
import { Heading, LinkButton } from "./elements";
import { getHrefs } from "../utils/langService";

const HireMeBox = ({ t, lang }) => (
  <StyledHireMeBox>
    <Container>
      <Heading dark left text={t.havaAnyProject} />

      <LinkButton light to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.hireMe} />
    </Container>
  </StyledHireMeBox>
);

export default HireMeBox;
