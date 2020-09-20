import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ name, checked, onChange, text }) => (
  <label className="Checkbox">
    {text}
    <input type="checkbox" name={name} checked={checked} onChange={onChange} />
    <span className="checkmark"></span>
  </label>
);

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Checkbox;
