import React from "react";
import Link from "next/link";
import { StyledProject } from "../../styled/projects";
import { ProjectProps } from "./interfaces";

import imgGymFreak from "../../static/images/projects/gym-freak.svg";
import imgKeepYourTime from "../../static/images/projects/keep-your-time.svg";
import imgLukaszWarchol from "../../static/images/projects/lukasz-warchol.svg";

const Project: React.FC<ProjectProps> = props => (
  <StyledProject>
    <Link href={`/Projects/${props.id}`} as={`/project/${props.id}`} prefetch={false}>
      <a>
        <img src={props.image} alt="" />
      </a>
    </Link>
  </StyledProject>
);

const GymFreak: React.FC = () => <Project id="1" image={imgGymFreak} />;
const KeepYourTime: React.FC = () => <Project id="2" image={imgKeepYourTime} />;
const LukaszWarchol: React.FC = () => <Project id="3" image={imgLukaszWarchol} />;
const SWYM: React.FC = () => <Project id="4" image={imgGymFreak} />;
const Droplead: React.FC = () => <Project id="5" image={imgGymFreak} />;

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
