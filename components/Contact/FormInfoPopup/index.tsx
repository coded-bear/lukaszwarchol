import React from "react";
import { FormInfoPopupProps } from "../interfaces";
import imgClose from "../../../static/images/common/close.svg";

const FormInfoPopup: React.FC<FormInfoPopupProps> = props => (
  <div>
    <div>
      <button onClick={props.close}>
        <img src={imgClose} alt="close" />
      </button>
      <p>{props.info}</p>
    </div>
  </div>
);

export default FormInfoPopup;
