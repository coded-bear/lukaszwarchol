import styled from "styled-components";
import * as colors from "./colors";

export const StyledContactBox = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 80px auto;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledContactContent = styled.div`
  flex: 1;
  padding: 20px;
`;

// FORM

export const StyledContactForm = styled.form`
  flex: 1;
  padding: 20px;
`;

export const StyledInput = styled.label`
  input,
  textarea {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid ${colors.PRIMARY_TEXT};
    background-color: transparent;
    color: ${colors.PRIMARY_TEXT};
    font-size: 16px;
    resize: none;

    &::placeholder {
      color: ${colors.PRIMARY_TEXT};
    }
  }
`;

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

export const StyledFormError = styled.div`
  margin-bottom: 10px;
  color: ${colors.PRIMARY_YELLOW};
`;
