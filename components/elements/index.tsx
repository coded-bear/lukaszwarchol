import React from "react";
import Head from "next/head";
import Link from "next/link";
import { TitleProps, HeadingProps, ButtonProps, LinkButtonProps } from "./interfaces";

export const Title: React.FC<TitleProps> = props => (
  <Head>
    <title>{props.text}</title>
  </Head>
);

export const Heading: React.FC<HeadingProps> = props => {
  return <h2>{props.text}</h2>;
};

export const Button: React.FC<ButtonProps> = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export const LinkButton: React.FC<LinkButtonProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <a>{props.text}</a>
  </Link>
);
