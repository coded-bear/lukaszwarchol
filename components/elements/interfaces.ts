export interface TitleProps {
  text: string;
}

export interface HeadingProps {
  text: string;
  dark?: boolean;
  left?: boolean;
}

export interface ButtonProps {
  text: string;
  onClick: any;
}

export interface LinkButtonProps {
  text: string;
  href: string;
  as: string;
}
