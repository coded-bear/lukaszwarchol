import React from "react";
import { LinkButton } from "../elements";
import { Container } from "../../styled/global";

const HireMeBox: React.FC = () => (
  <section>
    <Container>
      <h2>Have Any Project in Mind?</h2>

      <LinkButton text="Hire Me" href="/contact" as="/contact" />
    </Container>
  </section>
);

export default HireMeBox;
