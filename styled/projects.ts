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
