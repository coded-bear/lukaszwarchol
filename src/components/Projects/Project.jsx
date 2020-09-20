import React from "react";
import PropTypes from "prop-types";
import { projectsCategoriesList } from "../../utils/common";

const Project = ({ t }) => (
  <div className={`Projects__project ${t.shortName}`}>
    <div className="Projects__project--content">
      <div>
        <p className="category">{projectsCategoriesList[t.category]}</p>
        <h4 className="title">{t.name}</h4>
        <p>{t.description}</p>
      </div>

      <div className="links">
        {t.links.map((elem, index) => (
          <a key={index} href={elem.href} target="_blank" rel="noopener noreferrer">
            {elem.name}
          </a>
        ))}
      </div>
    </div>
  </div>
);

Project.propTypes = {
  t: PropTypes.object.isRequired
};

export default Project;
