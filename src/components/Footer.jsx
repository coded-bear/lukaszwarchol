import React from "react";
import PropTypes from "prop-types";

const Footer = ({ lang, t }) => <footer className="Footer">Footer</footer>;

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
  t: PropTypes.object.isRequired
};

export default Footer;
