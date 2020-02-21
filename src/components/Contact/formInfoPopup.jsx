import React from "react";
import { StyledFormInfoPopupContainer, StyledFormInfoPopup } from "../../styled/contact";
import imgClose from "../../images/common/close.svg";

const FormInfoPopup = ({ info, close }) => (
  <StyledFormInfoPopupContainer>
    <StyledFormInfoPopup>
      <button onClick={close}>
        <img src={imgClose} alt="close" />
      </button>
      <p>{info}</p>
    </StyledFormInfoPopup>
  </StyledFormInfoPopupContainer>
);

export default FormInfoPopup;
