import React, { useState } from "react";
import Layout from "../layout";
import { Container } from "../../styled/layout";
import { StyledProjectsBtn, StyledProjectsList } from "../../styled/projects";
import { Heading, SubTitle } from "../elements";
import { All, WebApplications, Websites, Mockups } from "./allProjects";

const Button = ({ onClick, active, name }) => (
  <StyledProjectsBtn onClick={onClick} active={active}>
    {name}
  </StyledProjectsBtn>
);

const Projects = ({ pageContext }) => {
  const [view, setView] = useState(1);

  const { lang, t } = pageContext;

  return (
    <Layout>
      <section>
        <Heading text={t.title} />
        <SubTitle text={t.subtitle} />

        <Container>
          <div>
            {t.views.map((elem, index) => (
              <Button key={index} onClick={() => setView(index + 1)} active={view === index + 1} name={elem} />
            ))}
          </div>

          <StyledProjectsList>
            {view === 2 ? (
              <WebApplications lang={lang} />
            ) : view === 3 ? (
              <Websites lang={lang} />
            ) : view === 4 ? (
              <Mockups lang={lang} />
            ) : (
              <All lang={lang} />
            )}
          </StyledProjectsList>
        </Container>
      </section>
    </Layout>
  );
};

export default Projects;
