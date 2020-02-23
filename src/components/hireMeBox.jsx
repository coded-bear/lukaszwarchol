import React from "react";
import PropTypes from "prop-types";
import { Container, StyledHireMeBox } from "../styled/layout";
import { Heading, LinkButton } from "./elements";
import { getHrefs } from "../utils/langService";

const HireMeBox = ({ lang, t }) => (
  <StyledHireMeBox>
    <Container>
      <Heading dark left text={t.havaAnyProject} />

      <LinkButton light to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.hireMe} />
    </Container>
  </StyledHireMeBox>
);

HireMeBox.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default HireMeBox;
