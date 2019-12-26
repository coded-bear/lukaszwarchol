import React from "react";
import Head from "next/head";
import Link from "next/link";
import { TitleProps, HeadingProps, LinkButtonProps } from "./interfaces";
import { StyledHeading, StyledLinkButton } from "../../styled/layout";
import { APP_NAME } from "../../common/utils/constants";

export const Title: React.FC<TitleProps> = props => (
  <Head>
    <title>{APP_NAME + " | " + props.text}</title>
  </Head>
);

export const Heading: React.FC<HeadingProps> = props => {
  return (
    <StyledHeading dark={props.dark} left={props.left}>
      {props.text}
    </StyledHeading>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <StyledLinkButton light={props.light}>{props.text}</StyledLinkButton>
  </Link>
);
