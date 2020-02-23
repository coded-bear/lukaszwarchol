import React from "react";
import { Link } from "gatsby";
import { StyledProject } from "../../styled/projects";
import imgGymFreak from "../../images/projects/gym-freak.svg";
import imgKeepYourTime from "../../images/projects/keep-your-time.svg";
import imgLukaszWarchol from "../../images/projects/lukasz-warchol.svg";

const Project = ({ projectName, image, lang }) => (
  <StyledProject>
    <Link to={`/${lang}/projects/${projectName}/`}>
      <img src={image} alt={projectName} />
    </Link>
  </StyledProject>
);

const GymFreak = ({ lang }) => <Project projectName="gym-freak" image={imgGymFreak} lang={lang} />;
const KeepYourTime = ({ lang }) => <Project projectName="keep-your-time" image={imgKeepYourTime} lang={lang} />;
const LukaszWarchol = ({ lang }) => <Project projectName="lukasz-warchol" image={imgLukaszWarchol} lang={lang} />;
const SWYM = ({ lang }) => <Project projectName="swym" image={imgGymFreak} lang={lang} />;
const Droplead = ({ lang }) => <Project projectName="droplead" image={imgGymFreak} lang={lang} />;

export const All = ({ lang }) => (
  <>
    <GymFreak lang={lang} />
    <KeepYourTime lang={lang} />
    <LukaszWarchol lang={lang} />
    <SWYM lang={lang} />
    <Droplead lang={lang} />
  </>
);

export const WebApplications = ({ lang }) => (
  <>
    <GymFreak lang={lang} />
    <KeepYourTime lang={lang} />
    <Droplead lang={lang} />
  </>
);

export const Websites = ({ lang }) => (
  <>
    <LukaszWarchol lang={lang} />
  </>
);

export const Mockups = () => <></>;
