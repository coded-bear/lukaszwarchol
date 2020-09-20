import React from "react";
import PropTypes from "prop-types";

const ProjectsBtn = ({ name, click, active }) => (
  <button className={`Projects__btn ${active && "active"}`} onClick={click}>
    <p>{name}</p>
  </button>
);

ProjectsBtn.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default ProjectsBtn;
