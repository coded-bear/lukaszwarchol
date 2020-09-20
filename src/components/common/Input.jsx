import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, type, value, onChange, placeholder, maxLength }) => (
  <label className="Input">
    <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} maxLength={maxLength} />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number
};

export default Input;
