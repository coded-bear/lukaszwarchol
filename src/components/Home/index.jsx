import React from "react";
import PropTypes from "prop-types";
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

const Home = props => {
  const { lang, t, layoutT } = props.pageContext;
  const { path } = props;

  return (
    <Layout lang={lang} path={path} t={layoutT}>
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

Home.propTypes = {
  path: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    t: PropTypes.object.isRequired,
    layoutT: PropTypes.object.isRequired
  }).isRequired
};

export default Home;
