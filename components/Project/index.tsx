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
        <div>
          <img src={t.mainImage} alt={t.projectName} />
        </div>
        <div>
          <p>{t.description}</p>
          <a href={t.github} target="_blank">
            Zobacz na GitHub
          </a>
        </div>
      </div>

      <div>
        {t.images.map((elem: string, index: number) => (
          <div key={index}>
            <img src={elem} alt={t.projectName} />
          </div>
        ))}
      </div>
    </Container>
  </section>
);

Project.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const projectName: string = "lukasz-warchol";
  const t: any = await require(`../../static/locales/${lang}/project/${projectName}.json`);
  return { t };
};

export default Project;
