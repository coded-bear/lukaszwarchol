import React, { useState } from "react";
import SEO from "../seo";
import Layout from "../layout";
import { Container } from "../../styled/layout";
import { StyledProjectsBtn, StyledProjectsList } from "../../styled/projects";
import { Heading, SubTitle } from "../elements";
import { All, WebApplications, Websites, Mockups } from "./AllProjects";

const Button = ({ onClick, active, name }) => (
  <StyledProjectsBtn onClick={onClick} active={active}>
    {name}
  </StyledProjectsBtn>
);

const Projects = props => {
  const [view, setView] = useState(1);

  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
      <SEO title={t.title} lang={lang} />

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
              <WebApplications path={path} />
            ) : view === 3 ? (
              <Websites path={path} />
            ) : view === 4 ? (
              <Mockups path={path} />
            ) : (
              <All path={path} />
            )}
          </StyledProjectsList>
        </Container>
      </section>
    </Layout>
  );
};

export default Projects;
