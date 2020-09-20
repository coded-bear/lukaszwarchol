import React from "react";
import PropTypes from "prop-types";

const LinkButton = ({ onClick, children }) => (
  <button className="LinkButton Button" onClick={onClick}>
    {children}
  </button>
);

LinkButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default LinkButton;
