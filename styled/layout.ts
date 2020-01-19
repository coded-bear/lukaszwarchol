import styled from "styled-components";
import * as colors from "./colors";

interface StyledHeadingProps {
  dark?: boolean;
  left?: boolean;
}

interface StyledLinkButtonProps {
  light?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const StyledHeading = styled.h2`
  position: relative;
  margin: 0 0 30px 0;
  padding-bottom: 10px;
  font-size: 44px;
  text-align: ${(props: StyledHeadingProps) => (props.left ? "left" : "center")};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: ${(props: StyledHeadingProps) => (props.left ? 0 : "50%")};
    width: 80px;
    height: 4px;
    transform: ${(props: StyledHeadingProps) => (props.left ? "none" : "translate(-50%)")};
    background-color: ${(props: StyledHeadingProps) => (props.dark ? colors.PRIMARY_TEXT : colors.PRIMARY_YELLOW)};
  }
`;

export const StyledSubTitle = styled.p`
  width: 100%;
  max-width: 700px;
  margin: 0 auto 80px auto;
  text-align: center;
`;

export const StyledLinkButton = styled.a`
  position: relative;
  display: inline-flex;
  padding: 15px 50px;
  border: 3px solid ${(props: StyledLinkButtonProps) => (props.light ? "#ffffff" : colors.PRIMARY_YELLOW)};
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;

  strong {
    z-index: 10;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props: StyledLinkButtonProps) => (props.light ? "#ffffff" : colors.PRIMARY_YELLOW)};
    transition: 0.3s;
  }

  &:hover::after {
    left: 75%;
  }
`;

export const StyledSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 25px auto;

  a {
    margin: 0 10px;
    padding: 0 5px;

    img {
      height: 30px;
    }
  }
`;

export const StyledHireMeBox = styled.section`
  padding: 60px 20px;
  background-color: ${colors.PRIMARY_YELLOW};
`;
