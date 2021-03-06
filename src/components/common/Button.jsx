import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children }) => (
  <button className="LinkButton Button" onClick={onClick}>
    <span>{children}</span>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;
