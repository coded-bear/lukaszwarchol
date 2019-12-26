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

export const StyledExperienceBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledExperienceElem = styled.div`
  width: calc(100% / 3 - 20px);
  margin: 10px;
  padding: 30px;
  border: 1px solid ${colors.PRIMARY_TEXT};

  .date {
    font-weight: bold;
    text-transform: uppercase;
  }

  h4 {
    margin: 10px 0 20px 0;
    font-size: 24px;
  }

  p {
    margin: 0;
  }

  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
