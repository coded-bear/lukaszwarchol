import styled from "styled-components";

export const StyledError = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 700px;
  min-height: 60vh;
  margin: 0 auto 80px auto;

  h2 {
    margin: 0;
    font-size: 100px;
  }

  p {
    margin: 20px 0 50px 0;
    font-size: 40px;
    font-weight: bold;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StyledErrorContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const StyledErrorImage = styled.div`
  flex: 1;
  padding: 20px;
  text-align: right;

  img {
    width: 70%;
  }

  @media only screen and (max-width: 700px) {
    text-align: center;

    img {
      width: 50%;
    }
  }
`;
