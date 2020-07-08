import React from "react";
import PropTypes from "prop-types";

const Heading = ({ dark, left, text }) => <h1 className={`heading ${dark ? "dark" : ""} ${left ? "left" : ""}`}>{text}</h1>;

Heading.propTypes = {
  dark: PropTypes.bool,
  left: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default Heading;
