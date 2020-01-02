import styled from "styled-components";
import * as colors from "./colors";

export const StyledServicesBox = styled.div`
  display: flex;
  margin-bottom: 80px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledServiceElem = styled.div`
  flex: 1;
  margin: 10px;
  padding: 30px;
  border: 1px solid ${colors.PRIMARY_TEXT};

  img {
    height: 60px;
  }

  h4 {
    margin: 20px 0;
    font-size: 24px;
  }

  p {
    margin: 0;
  }
`;
