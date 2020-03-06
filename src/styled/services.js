import styled from "styled-components";
import * as colors from "./colors";

export const StyledServicesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 80px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledServiceElem = styled.div`
  width: calc(100% / 3 - 20px);
  margin: 10px;
  padding: 30px;
  border: 1px solid ${colors.PRIMARY_TEXT};

  img {
    height: 100px;
  }

  h4 {
    margin: 20px 0;
    font-size: 24px;
  }

  p {
    margin: 0;
  }
`;
