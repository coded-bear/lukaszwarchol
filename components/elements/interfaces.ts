export interface TitleProps {
  text: string;
}

export interface HeadingProps {
  text: string;
  dark?: boolean;
  left?: boolean;
}

export interface SubTitleProps {
  text: string;
}

export interface LinkButtonProps {
  text: string;
  href: string;
  as: string;
  light?: boolean;
}

export interface SocialMediaElemProps {
  href: string;
  name: string;
  image: string;
}
