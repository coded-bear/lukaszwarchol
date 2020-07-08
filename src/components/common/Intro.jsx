import React from "react";
import PropTypes from "prop-types";

const Intro = ({ dark, left, text }) => <h2 className={`heading ${dark ? "dark" : ""} ${left ? "left" : ""}`}>{text}</h2>;

Intro.propTypes = {
  dark: PropTypes.bool,
  left: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default Intro;
