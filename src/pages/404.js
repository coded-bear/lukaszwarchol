import React from "react";
import "../styles/notFoundPage.scss";
import SEO from "../components/seo";
import Layout from "../components/layout";
import LinkButton from "../components/common/LinkButton";
import imgNotFound from "../images/common/not-found.svg";
import layoutT from "../static/locales/pl/layout.json";

const NotFoundPage = ({ path }) => (
  <Layout t={layoutT} path={path} lang="pl">
    <section className="NotFoundPage">
      <SEO title="Nie znaleziono strony" />

      <div className="container NotFoundPage__container">
        <div className="NotFoundPage__content">
          <h1>404</h1>
          <h2>Nie znaleziono strony</h2>
          <LinkButton to="/pl/" text="Przejdź do strony głównej" />
        </div>
        <img src={imgNotFound} alt="Nie znaleziono" />
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
