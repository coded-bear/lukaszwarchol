import React from "react";
import { StyledFormInfoPopupContainer, StyledFormInfoPopup } from "../../../styled/contact";
import { FormInfoPopupProps } from "../interfaces";
import imgClose from "../../../static/images/common/close.svg";

const FormInfoPopup: React.FC<FormInfoPopupProps> = props => (
  <StyledFormInfoPopupContainer>
    <StyledFormInfoPopup>
      <button onClick={props.close}>
        <img src={imgClose} alt="close" />
      </button>
      <p>{props.info}</p>
    </StyledFormInfoPopup>
  </StyledFormInfoPopupContainer>
);

export default FormInfoPopup;
