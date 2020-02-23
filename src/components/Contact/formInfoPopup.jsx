import React from "react";
import PropTypes from "prop-types";
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

FormInfoPopup.propTypes = {
  info: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

export default FormInfoPopup;
