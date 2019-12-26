import styled from "styled-components";
import * as colors from "./colors";

export const StyledAbout = styled.section`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 80px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledAboutImage = styled.div`
  flex: 2;
  padding: 20px;
`;

export const StyledAboutContent = styled.div`
  flex: 3;
  padding: 20px;

  a {
    margin-top: 20px;
  }
`;

// EXPERIENCES

export const StyledExperiences = styled.section`
  padding: 80px;
  background-color: ${colors.LIGHT_GRAY};
`;
