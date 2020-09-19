import React from "react";
import PropTypes from "prop-types";

const Intro = ({ title, description }) => (
  <>
    <h2 className="Intro">{title}</h2>
    {description && <p className="Intro__description">{description}</p>}
  </>
);

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Intro;
