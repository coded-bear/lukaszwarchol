import React from "react";
import Link from "next/link";
import { StyledProject } from "../../styled/projects";
import { ProjectProps, ProjectSingleProps } from "./interfaces";

import imgGymFreak from "../../static/images/projects/gym-freak.svg";
import imgKeepYourTime from "../../static/images/projects/keep-your-time.svg";
import imgLukaszWarchol from "../../static/images/projects/lukasz-warchol.svg";

const Project: React.FC<ProjectProps> = props => (
  <StyledProject>
    <Link href={`/project/${props.projectName}`} as={`/${props.lang}/projects/${props.projectName}`} prefetch={false}>
      <a>
        <img src={props.image} alt={props.projectName} />
      </a>
    </Link>
  </StyledProject>
);

const GymFreak: React.FC<ProjectSingleProps> = props => (
  <Project projectName="gym-freak" image={imgGymFreak} lang={props.lang} />
);
const KeepYourTime: React.FC<ProjectSingleProps> = props => (
  <Project projectName="keep-your-time" image={imgKeepYourTime} lang={props.lang} />
);
const LukaszWarchol: React.FC<ProjectSingleProps> = props => (
  <Project projectName="lukasz-warchol" image={imgLukaszWarchol} lang={props.lang} />
);
const SWYM: React.FC<ProjectSingleProps> = props => (
  <Project projectName="swym" image={imgGymFreak} lang={props.lang} />
);
const Droplead: React.FC<ProjectSingleProps> = props => (
  <Project projectName="droplead" image={imgGymFreak} lang={props.lang} />
);

export const All: React.FC<ProjectSingleProps> = props => (
  <>
    <GymFreak lang={props.lang} />
    <KeepYourTime lang={props.lang} />
    <LukaszWarchol lang={props.lang} />
    <SWYM lang={props.lang} />
    <Droplead lang={props.lang} />
  </>
);

export const WebApplications: React.FC<ProjectSingleProps> = props => (
  <>
    <GymFreak lang={props.lang} />
    <KeepYourTime lang={props.lang} />
    <Droplead lang={props.lang} />
  </>
);

export const Websites: React.FC<ProjectSingleProps> = props => (
  <>
    <LukaszWarchol lang={props.lang} />
  </>
);

export const Mockups: React.FC<ProjectSingleProps> = () => <></>;
