import React from "react";
import PropTypes from "prop-types";
import Intro from "../common/Intro";

const Experience = ({ t }) => (
  <section className="Experience">
    <div className="container">
      <Intro title={t.title} description={t.subtitle} />

      <div className="Experience__container">
        {t.boxes.map((elem, index) => (
          <div key={index} className={`RoundBox Experience__elem ${!!elem.currently ? "Experience__elem--currently" : ""}`}>
            <p className="date">{elem.date}</p>
            <h4>{elem.title}</h4>
            <p>{elem.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Experience.propTypes = {
  t: PropTypes.object.isRequired
};

export default Experience;
