import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_CODE, ICONS_LINKS } from "../utils/constants";

interface Props {
  main: any;
  styleTags: any;
}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps: any = await Document.getInitialProps(ctx);

    const sheet: any = new ServerStyleSheet();
    const main: any = sheet.collectStyles(<Main />);
    const styleTags: any = sheet.getStyleElement();

    return { ...initialProps, main, styleTags };
  }

  render() {
    const { main, styleTags } = this.props;

    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
          <link rel="icon" href="/static/images/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet"></link>

          <script dangerouslySetInnerHTML={{ __html: GA_CODE }} />

          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>

        <script dangerouslySetInnerHTML={{ __html: ICONS_LINKS }} />
      </Html>
    );
  }
}

export default MyDocument;
