import React from "react";
import Head from "next/head";
import Link from "next/link";
import { TitleProps, HeadingProps, SubTitleProps, LinkButtonProps, SocialMediaElemProps } from "./interfaces";
import { StyledHeading, StyledSubTitle, StyledLinkButton, StyledSocialMedia } from "../../styled/layout";
import { APP_NAME } from "../../common/utils/constants";

import imgFacebook from "../../static/images/common/facebook.svg";
import imgLinkedin from "../../static/images/common/linkedin.svg";
import imgGithub from "../../static/images/common/github.svg";
import imgInstagram from "../../static/images/common/instagram.svg";

export const Title: React.FC<TitleProps> = props => (
  <Head>
    <title>{APP_NAME + " | " + props.text}</title>
  </Head>
);

export const Heading: React.FC<HeadingProps> = props => (
  <StyledHeading dark={props.dark} left={props.left}>
    {props.text}
  </StyledHeading>
);

export const SubTitle: React.FC<SubTitleProps> = props => {
  return <StyledSubTitle>{props.text}</StyledSubTitle>;
};

export const LinkButton: React.FC<LinkButtonProps> = props => (
  <Link href={props.href} as={props.as} prefetch={false}>
    <StyledLinkButton light={props.light}>{props.text}</StyledLinkButton>
  </Link>
);

const SocialMediaElem: React.FC<SocialMediaElemProps> = props => (
  <a href={props.href} target="_blank">
    <img src={props.image} alt={props.name} />
  </a>
);

export const SocialMedia: React.FC = () => (
  <StyledSocialMedia>
    <SocialMediaElem href="https://www.facebook.com/lukasz.warchol14" name="Facebook" image={imgFacebook} />
    <SocialMediaElem href="https://www.linkedin.com/in/lukasz-warchol/" name="LinkedIn" image={imgLinkedin} />
    <SocialMediaElem href="https://github.com/coded-bear" name="GitHub" image={imgGithub} />
    <SocialMediaElem href="https://www.instagram.com/lukasz.warchol/" name="Instagram" image={imgInstagram} />
  </StyledSocialMedia>
);
