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
          <Button onClick={() => changeView(1)} name="All" />
          <Button onClick={() => changeView(2)} name="WEB Applications" />
          <Button onClick={() => changeView(3)} name="Websites" />
          <Button onClick={() => changeView(4)} name="Mockups" />
        </div>
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
