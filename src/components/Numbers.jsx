import React from "react";
import PropTypes from "prop-types";

const Number = ({ name, number }) => (
  <div className="Numbers__elem">
    <p className="number">{number}</p>
    <p>{name}</p>
  </div>
);

Number.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};

const Numbers = ({ t }) => (
  <div className="container Numbers">
    <Number name={t.exp} number="4" />
    <Number name={t.techs} number="20" />
    <Number name={t.projects} number="36" />
    <Number name={t.coffee} number="1056" />
  </div>
);

export default Numbers;
