import React from "react";
import Link from "next/link";
import { StyledProject } from "../../styled/projects";
import { ProjectProps } from "./interfaces";

import imgGymFreak from "../../static/images/projects/gym-freak.svg";
import imgKeepYourTime from "../../static/images/projects/keep-your-time.svg";
import imgLukaszWarchol from "../../static/images/projects/lukasz-warchol.svg";

const Project: React.FC<ProjectProps> = props => (
  <StyledProject>
    <Link href={`/project/${props.projectName}`} as={`/projects/${props.projectName}`} prefetch={false}>
      <a>
        <img src={props.image} alt={props.projectName} />
      </a>
    </Link>
  </StyledProject>
);

const GymFreak: React.FC = () => <Project projectName="GymFreak" image={imgGymFreak} />;
const KeepYourTime: React.FC = () => <Project projectName="KeepYourTime" image={imgKeepYourTime} />;
const LukaszWarchol: React.FC = () => <Project projectName="LukaszWarchol" image={imgLukaszWarchol} />;
const SWYM: React.FC = () => <Project projectName="SWYM" image={imgGymFreak} />;
const Droplead: React.FC = () => <Project projectName="Droplead" image={imgGymFreak} />;

export const All: React.FC = () => (
  <>
    <GymFreak />
    <KeepYourTime />
    <LukaszWarchol />
    <SWYM />
    <Droplead />
  </>
);

export const WebApplications: React.FC = () => (
  <>
    <GymFreak />
    <KeepYourTime />
    <Droplead />
  </>
);

export const Websites: React.FC = () => (
  <>
    <LukaszWarchol />
  </>
);

export const Mockups: React.FC = () => <></>;
