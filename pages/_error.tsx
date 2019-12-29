import React from "react";
import { Res, ErrInterface } from "../utils/types";
import { LinkButton } from "../components/elements";
import { StyledError, StyledErrorContent, StyledErrorImage } from "../styled/error";
import imgFoot from "../static/images/common/foot.svg";

const Error = ({ statusCode }: { statusCode: number }) => (
  <StyledError>
    <StyledErrorContent>
      <h2>{statusCode}</h2>
      <p>Page not found</p>
      <LinkButton href="/home" as="/" text="Homepage" />
    </StyledErrorContent>

    <StyledErrorImage>
      <img src={imgFoot} alt="foot" />
    </StyledErrorImage>
  </StyledError>
);

Error.getInitialProps = async ({ res, err }: { res: Res; err: ErrInterface }): Promise<any> => {
  console.log(err);
  const statusCode: number = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
