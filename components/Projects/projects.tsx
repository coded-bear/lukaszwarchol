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

export const GymFreak = <Project id="1" class="gym-freak" />;
export const KeepYourTime = <Project id="2" class="keep-your-time" />;
export const LukaszWarchol = <Project id="3" class="lukasz-warchol" />;
export const SWYM = <Project id="4" class="swym" />;
export const Droplead = <Project id="5" class="droplead" />;
