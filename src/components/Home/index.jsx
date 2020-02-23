import React from "react";
import SEO from "../seo";
import Layout from "../layout";
import {
  StyledHomeHeader,
  StyledHomeHeaderContent,
  StyledHomeHeaderRight,
  SocialMediaHomeHeaderBox
} from "../../styled/home";
import { LinkButton, SocialMedia } from "../elements";
import { getHrefs } from "../../utils/langService";

const Home = ({ pageContext }) => {
  const { lang, t, layoutT } = pageContext;

  return (
    <Layout t={layoutT} lang={lang}>
      <SEO title="JavaScript Software Developer" lang={lang} />

      <StyledHomeHeader>
        <StyledHomeHeaderContent>
          <p>{t.header.hello}</p>
          <h3>
            <span>
              <strong>{t.header.Im}</strong>
            </span>
          </h3>
          <p>
            <strong>JavaScript Software Developer</strong>
          </p>

          <LinkButton to={`/${lang}/${getHrefs(lang)[3]}/`} text={t.header.hireMe} />
        </StyledHomeHeaderContent>

        <StyledHomeHeaderRight></StyledHomeHeaderRight>

        <SocialMediaHomeHeaderBox>
          <SocialMedia />
        </SocialMediaHomeHeaderBox>
      </StyledHomeHeader>
    </Layout>
  );
};

export default Home;
