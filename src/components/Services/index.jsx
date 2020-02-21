import React from "react";
import Layout from "../layout";
import { Container } from "../../styled/layout";
import { StyledServicesBox, StyledServiceElem } from "../../styled/services";
import { Heading, SubTitle } from "../elements";

import imgWebApp from "../../images/services/web-app.svg";
import imgWebsite from "../../images/services/website.svg";
import imgMockup from "../../images/services/mockup.svg";

const images = [imgWebApp, imgWebsite, imgMockup];

const Services = ({ pageContext }) => {
  const { t } = pageContext;

  return (
    <Layout>
      <section>
        <Container>
          <Heading text={t.title} />
          <SubTitle text={t.subtitle} />

          <StyledServicesBox>
            {t.boxes.map((elem, index) => (
              <StyledServiceElem key={index}>
                <img src={images[index]} alt={elem.title} />
                <h4>{elem.title}</h4>
                <p>{elem.description}</p>
              </StyledServiceElem>
            ))}
          </StyledServicesBox>
        </Container>
      </section>
    </Layout>
  );
};

export default Services;
