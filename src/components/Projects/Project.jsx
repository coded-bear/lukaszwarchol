import React from "react";
import PropTypes from "prop-types";

const Project = ({ t, categories }) => (
  <div className={`Projects__project ${t.shortName}`}>
    <div className="Projects__project--content">
      <div>
        <p className="category">{categories[t.category]}</p>
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
  t: PropTypes.object.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Project;
