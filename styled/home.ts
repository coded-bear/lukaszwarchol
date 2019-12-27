import styled from "styled-components";

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

// NUMBERS

export const StyledHomeNumbers = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 80px 0;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledNumbersElem = styled.div`
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
