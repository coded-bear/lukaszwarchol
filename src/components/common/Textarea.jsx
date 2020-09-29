import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const Textarea = ({ name, value, onChange, rows, labelText, maxLength, errorMessage }) => {
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
      <textarea name={name} value={value} onChange={onChange} rows={rows} onFocus={focused} onBlur={blurred} maxLength={maxLength}></textarea>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </label>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
  labelText: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string
};

export default Textarea;
