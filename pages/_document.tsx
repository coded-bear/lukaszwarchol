import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

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

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;(i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments);}),(i[r].l=1*new Date());(a=s.createElement(o)),(m=s.getElementsByTagName(o)[0]);a.async=1;a.src=g;m.parentNode.insertBefore(a,m);})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");ga("create","UA-97392728-1","auto");ga("send","pageview");`
            }}
          />

          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>

        <script
          dangerouslySetInnerHTML={{
            __html: `<!--<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>-->`
          }}
        />
      </Html>
    );
  }
}

export default MyDocument;
