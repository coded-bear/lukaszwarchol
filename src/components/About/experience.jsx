import React from "react";
import PropTypes from "prop-types";
import { Heading, SubTitle } from "../elements";

const Experience = ({ t }) => (
  <section className="Experience">
    <div className="container">
      <Heading text={t.title} />
      <SubTitle text={t.subtitle} />

      <div className="Experience__container">
        {t.boxes.map((elem, index) => (
          <div className="Experience__elem" key={index}>
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
