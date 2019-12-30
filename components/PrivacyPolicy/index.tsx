import React from "react";
import { NextPage } from "next";
import { StyledPrivacyPolicy } from "../../styled/privacyPolicy";
import { getLang } from "../../utils/langService";
import { Title, Heading } from "../elements";

const PrivacyPolicy: NextPage<{ t: any }> = ({ t }) => (
  <StyledPrivacyPolicy>
    <Title text={t.title} />

    <Heading text={t.title} />

    {t.content.map((elem: string, index: number) => (
      <p key={index}>{elem}</p>
    ))}
  </StyledPrivacyPolicy>
);

PrivacyPolicy.getInitialProps = async ({ asPath }) => {
  const lang: string = await getLang(asPath);
  const t: any = await require(`../../static/locales/${lang}/privacyPolicy.json`);
  return { t };
};

export default PrivacyPolicy;
