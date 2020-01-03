import React from "react";
import { StyledError, StyledErrorContent, StyledErrorImage } from "../styled/error";
import { getLang } from "../utils/langService";
import { Res, ErrInterface } from "../utils/types";
import { LinkButton } from "../components/elements";
import imgFoot from "../static/images/common/foot.svg";

const Error = ({ statusCode, t, lang }: { statusCode: number; t: any; lang: string }) => (
  <StyledError>
    <StyledErrorContent>
      <h2>{statusCode}</h2>
      <p>{t.description}</p>
      <LinkButton href="/home" as={`/${lang}`} text={t.btn} />
    </StyledErrorContent>

    <StyledErrorImage>
      <img src={imgFoot} alt="foot" />
    </StyledErrorImage>
  </StyledError>
);

Error.getInitialProps = async ({ res, err, asPath }: { res: Res; err: ErrInterface; asPath: string }) => {
  const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404;

  const lang: string = await getLang(asPath);
  const t: any = await require(`../static/locales/${lang}/404.json`);

  return { statusCode, t, lang };
};

export default Error;
