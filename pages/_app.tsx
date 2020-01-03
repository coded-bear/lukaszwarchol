import React from "react";
import App from "next/app";
import Layout from "../Layout";
import { getLang } from "../utils/langService";

interface AppProps {
  lang: string;
  pathname: string;
  asPath: string;
  t: any;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: { Component: any; ctx: any }) {
    let pageProps = {};
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);

    const pathname: string = ctx.pathname;
    const asPath: string = ctx.asPath;
    const lang: string = await getLang(ctx.asPath);
    const t: any = require(`../static/locales/${lang}/layout.json`);

    return { pageProps, lang, pathname, asPath, t };
  }

  render() {
    const { Component, pageProps, lang, pathname, asPath, t } = this.props;

    return (
      <Layout lang={lang} pathname={pathname} asPath={asPath} t={t}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
