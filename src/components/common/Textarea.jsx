import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ name, value, onChange, rows, placeholder, maxLength }) => (
  <label className="Input">
    <textarea name={name} value={value} onChange={onChange} rows={rows} placeholder={placeholder} maxLength={maxLength}></textarea>
  </label>
);

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number
};

export default Textarea;
