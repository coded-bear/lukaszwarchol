import React from "react";
import { NextPage } from "next";
import { Container } from "../../styled/layout";
import { StyledServicesBox, StyledServiceElem } from "../../styled/services";
import { getLang } from "../../utils/langService";
import { Title, Heading, SubTitle } from "../elements";

import imgWebApp from "../../static/images/services/web-app.svg";
import imgWebsite from "../../static/images/services/website.svg";
import imgMockup from "../../static/images/services/mockup.svg";

const images: string[] = [imgWebApp, imgWebsite, imgMockup];

const Services: NextPage<{ t: any }> = ({ t }) => (
  <section>
    <Container>
      <Title text={t.title} />

      <Heading text={t.title} />
      <SubTitle text={t.subtitle} />

      <StyledServicesBox>
        {t.boxes.map((elem: any, index: number) => (
          <StyledServiceElem key={index}>
            <img src={images[index]} alt={elem.title} />
            <h4>{elem.title}</h4>
            <p>{elem.description}</p>
          </StyledServiceElem>
        ))}
      </StyledServicesBox>
    </Container>
  </section>
);

Services.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/services.json`);
  return { t };
};

export default Services;
