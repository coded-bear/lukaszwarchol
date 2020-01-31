import React from "react";
import { NextPage } from "next";
import { Container } from "../../styled/layout";
import { getLang } from "../../utils/langService";
import { Title, Heading } from "../elements";

const Project: NextPage<{ t: any }> = ({ t }) => (
  <section>
    <Title text={t.projectName} />

    <Heading text={t.projectName} />

    <Container>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </Container>
  </section>
);

Project.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const projectName: string = "lukaszwarchol";
  const t: any = await require(`../../static/locales/${lang}/project/${projectName}.json`);
  return { t };
};

export default Project;
