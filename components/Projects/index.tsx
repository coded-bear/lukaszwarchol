import React, { useState, useCallback, memo } from "react";
import { NextPage } from "next";
import { Container } from "../../styled/layout";
import { getLang } from "../../utils/langService";
import { Title, Heading, SubTitle } from "../elements";
import { ButtonProps } from "./interfaces";

const Button = memo((props: ButtonProps) => <button onClick={props.onClick}>{props.name}</button>);

const Projects: NextPage<{ t: any }> = ({ t }) => {
  const [view, setView] = useState<number>(1);

  const changeView = useCallback(
    (nr: number) => {
      setView(nr);
    },
    [view]
  );

  return (
    <section>
      <Title text={t.title} />

      <Heading text={t.title} />
      <SubTitle text={t.subtitle} />

      <Container>
        <div>
          {t.views.map((elem: string, index: number) => (
            <Button key={index} onClick={() => changeView(index + 1)} name={elem} />
          ))}
        </div>
        <div></div>
      </Container>
    </section>
  );
};

Projects.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/projects.json`);
  return { t };
};

export default Projects;
