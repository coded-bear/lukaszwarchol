import styled from "styled-components";
import * as colors from "./colors";

export const StyledHomeHeader = styled.section`
  display: flex;
  position: relative;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  margin: auto;
  padding-top: 10vh;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const StyledHomeHeaderContent = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 30px;

  h3 {
    margin: 0;
    font-size: 60px;
    font-weight: 400;
  }

  p {
    margin: 10px 0;
  }

  a {
    margin-top: 30px;
  }
`;

export const StyledHomeHeaderRight = styled.div`
  flex: 1;
  padding: 20px;
`;

export const SocialMediaHomeHeaderBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

// QUESTIONS

export const StyledHomeQuestions = styled.section`
  padding: 80px 0;
  background-color: ${colors.LIGHT_GRAY};
`;

export const StyledQuestionsBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledQuestionsElem = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 18px;
  text-align: center;

  img {
    height: 70px;
  }

  h4 {
    margin: 20px 0;
    font-size: 24px;
  }

  p {
    margin-bottom: 30px;
  }
`;

// NUMBERS

export const StyledHomeNumbers = styled.section`
  padding: 80px 0;
`;

export const StyledNumbersBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledNumbersElem = styled.div`
  flex: 1;
  padding: 20px;
  font-size: 18px;
  text-align: center;

  img {
    height: 70px;
  }

  p {
    margin: 20px 0;
    text-transform: uppercase;

    &.number {
      font-size: 44px;
    }
  }
`;
