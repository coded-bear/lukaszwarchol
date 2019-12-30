import { RefObj } from "../../utils/types";

export interface NavigationProps {
  t: any;
  lang: string;
  ref?: RefObj | null | undefined;
  closeMenu: any;
}

export interface NavElemProps {
  href: string;
  as: string;
  text: string;
  closeMenu: any;
}
