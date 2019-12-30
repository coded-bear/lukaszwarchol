import React from "react";
import { Container } from "../../styled/layout";
import { StyledHireMeBox } from "../../styled/layout";
import { HireMeBoxProps } from "./interfaces";
import { Heading, LinkButton } from "../elements";

const HireMeBox: React.FC<HireMeBoxProps> = props => (
  <StyledHireMeBox>
    <Container>
      <Heading dark left text={props.t.havaAnyProject} />

      <LinkButton light href="/contact" as={`/${props.lang}/contact`} text={props.t.hireMe} />
    </Container>
  </StyledHireMeBox>
);

export default HireMeBox;
