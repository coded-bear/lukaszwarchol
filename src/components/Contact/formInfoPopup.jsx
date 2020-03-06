import React from "react";
import PropTypes from "prop-types";
import imgClose from "../../images/common/close.svg";

const FormInfoPopup = ({ info, close }) => (
  <div className="form-info-popup-container">
    <div className="form-info-popup">
      <button onClick={close}>
        <img src={imgClose} alt="close" />
      </button>
      <p>{info}</p>
    </div>
  </div>
);

FormInfoPopup.propTypes = {
  info: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

export default FormInfoPopup;
