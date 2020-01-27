import styled from "styled-components";
import * as colors from "./colors";

export const StyledProjectsBtn = styled.button`
  margin: 0 10px;
  padding: 5px;
  border: 0;
  background-color: transparent;
  color: ${colors.PRIMARY_TEXT};
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${colors.PRIMARY_YELLOW};
  }
`;

export const StyledProjectsList = styled.div`
  display: flex;
  margin-bottom: 60px;
  flex-wrap: wrap;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const StyledProject = styled.div`
  position: relative;
  width: calc(100% / 3 - 20px);
  margin: 10px;
  background-color: #ddd;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    width: calc(100% / 2 - 20px);
  }

  @media only screen and (max-width: 700px) {
    width: calc(100% - 20px);
  }
`;
