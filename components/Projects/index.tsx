import React from "react";
import { NextPage } from "next";
import { getLang } from "../../utils/langService";
import { Title, Heading, SubTitle } from "../elements";

const Projects: NextPage<{ t: any }> = ({ t }) => (
  <section>
    <Title text={t.title} />

    <Heading text={t.title} />
    <SubTitle text={t.subtitle} />
  </section>
);

Projects.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/projects.json`);
  return { t };
};

export default Projects;
