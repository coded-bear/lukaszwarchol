import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const LinkButton = ({ to, light, text }) => (
  <Link to={to}>
    <h2 className={`LinkButton ${light ? "light" : ""}`}>
      <strong>{text}</strong>
    </h2>
  </Link>
);

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  light: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default LinkButton;
