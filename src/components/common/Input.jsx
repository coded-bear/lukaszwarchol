import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const Input = ({ name, type, value, onChange, labelText, maxLength, errorMessage }) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!value) setIsFocused(false);
  }, [value]);

  const focused = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const blurred = useCallback(() => {
    if (value) return;
    setIsFocused(false);
  }, [value, setIsFocused]);

  return (
    <label className={`Input ${isFocused ? "focused" : ""}`}>
      <p className="Input__labelText">{labelText}</p>
      <input type={type} name={name} value={value} onChange={onChange} onFocus={focused} onBlur={blurred} maxLength={maxLength} />
      {errorMessage && <p className="error">{errorMessage}</p>}
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string
};

export default Input;
