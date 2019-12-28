import styled from "styled-components";
import * as colors from "./colors";

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 15px 50px;
  border: 0;
  background-color: ${colors.PRIMARY_YELLOW};
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;
