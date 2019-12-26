import React from "react";
import { Title, Heading, SubTitle } from "../elements";
import { ServiceElemProps } from "./interface";
import { Container } from "../../styled/layout";
import { StyledServicesBox, StyledServiceElem } from "../../styled/services";

import imgWebApp from "../../static/images/services/web-app.svg";
import imgWebsite from "../../static/images/services/website.svg";
import imgMockup from "../../static/images/services/mockup.svg";

const ServiceElem: React.FC<ServiceElemProps> = props => (
  <StyledServiceElem>
    <img src={props.image} alt={props.title} />
    <h4>{props.title}</h4>
    <p>{props.text}</p>
  </StyledServiceElem>
);

const Services: React.FC = () => (
  <section>
    <Container>
      <Title text="Services" />

      <Heading text="Services" />
      <SubTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" />

      <StyledServicesBox>
        <ServiceElem
          image={imgWebApp}
          title="WEB Applications"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ServiceElem
          image={imgWebsite}
          title="Websites"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ServiceElem
          image={imgMockup}
          title="Mockups"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </StyledServicesBox>
    </Container>
  </section>
);

export default Services;
