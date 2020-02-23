import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StyledProject } from "../../styled/projects";
import imgGymFreak from "../../images/projects/gym-freak.svg";
import imgKeepYourTime from "../../images/projects/keep-your-time.svg";
import imgLukaszWarchol from "../../images/projects/lukasz-warchol.svg";

const Project = ({ projectName, image, path }) => (
  <StyledProject>
    <Link to={`${path + projectName}/`}>
      <img src={image} alt={projectName} />
    </Link>
  </StyledProject>
);

const GymFreak = ({ path }) => <Project projectName="gym-freak" image={imgGymFreak} path={path} />;
const KeepYourTime = ({ path }) => <Project projectName="keep-your-time" image={imgKeepYourTime} path={path} />;
const LukaszWarchol = ({ path }) => <Project projectName="lukasz-warchol" image={imgLukaszWarchol} path={path} />;
const SWYM = ({ path }) => <Project projectName="swym" image={imgGymFreak} path={path} />;
const Droplead = ({ path }) => <Project projectName="droplead" image={imgGymFreak} path={path} />;

export const All = ({ path }) => (
  <>
    <GymFreak path={path} />
    <KeepYourTime path={path} />
    <LukaszWarchol path={path} />
    <SWYM path={path} />
    <Droplead path={path} />
  </>
);

export const WebApplications = ({ path }) => (
  <>
    <GymFreak path={path} />
    <KeepYourTime path={path} />
    <Droplead path={path} />
  </>
);

export const Websites = ({ path }) => (
  <>
    <LukaszWarchol path={path} />
  </>
);

export const Mockups = () => <></>;

Project.propTypes = {
  projectName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

All.propTypes = {
  path: PropTypes.string.isRequired
};

WebApplications.propTypes = {
  path: PropTypes.string.isRequired
};

Websites.propTypes = {
  path: PropTypes.string.isRequired
};
