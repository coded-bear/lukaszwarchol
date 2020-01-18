import React from "react";
import Link from "next/link";
import { ProjectProps } from "./interfaces";

const Project: React.FC<ProjectProps> = props => (
  <Link href={`/Projects/${props.id}`} as={`/project/${props.id}`} prefetch={false}>
    <a>
      <div className={props.class}></div>
    </a>
  </Link>
);

const GymFreak: React.FC = () => <Project id="1" class="gym-freak" />;
const KeepYourTime: React.FC = () => <Project id="2" class="keep-your-time" />;
const LukaszWarchol: React.FC = () => <Project id="3" class="lukasz-warchol" />;
const SWYM: React.FC = () => <Project id="4" class="swym" />;
const Droplead: React.FC = () => <Project id="5" class="droplead" />;

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
