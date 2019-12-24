import App from "next/app";
import Layout from "../Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
