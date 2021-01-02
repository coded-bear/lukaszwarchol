import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, checked, onChange, text, errorMessage }) => (
  <label className={`Checkbox ${errorMessage ? "Checkbox__error" : ""}`}>
    {text}
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <span className="checkmark"></span>
    {errorMessage && <p className="error">{errorMessage}</p>}
  </label>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string,
  errorMessage: PropTypes.string
};

export default Checkbox;
