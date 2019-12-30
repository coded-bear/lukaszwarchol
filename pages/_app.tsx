import App from "next/app";
import Layout from "../Layout";
import { getLang } from "../utils/langService";

interface AppProps {
  lang: string;
  pathname: string;
  asPath: string;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: { Component: any; ctx: any }) {
    let pageProps = {};
    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);

    const pathname: string = ctx.pathname;
    const asPath: string = ctx.asPath;
    const lang: string = await getLang(ctx.asPath);

    return { pageProps, lang, pathname, asPath };
  }

  render() {
    const { Component, pageProps, lang, pathname, asPath } = this.props;

    return (
      <Layout lang={lang} pathname={pathname} asPath={asPath}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
