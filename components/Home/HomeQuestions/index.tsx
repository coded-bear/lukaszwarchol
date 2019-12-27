import React from "react";
import { QuestionElemProps } from "../interfaces";
import { StyledHomeQuestions, StyledQuestionsBox, StyledQuestionsElem } from "../../../styled/home";
import { LinkButton } from "../../elements";

import imgPerson from "../../../static/images/home/person.svg";
import imgBulb from "../../../static/images/home/bulb.svg";
import imgRocket from "../../../static/images/home/rocket.svg";

const QuestionElem: React.FC<QuestionElemProps> = props => (
  <StyledQuestionsElem>
    <img src={props.image} alt={props.title} />
    <h4>
      <strong>{props.title}</strong>
    </h4>
    <p>{props.description}</p>

    <LinkButton href={props.href} as={props.as} text="Learn more" />
  </StyledQuestionsElem>
);

const HomeQuestions: React.FC = () => (
  <StyledHomeQuestions>
    <StyledQuestionsBox>
      <QuestionElem
        image={imgPerson}
        title="Who am I?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        href="/about"
        as="/about"
      />
      <QuestionElem
        image={imgBulb}
        title="What I do?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        href="/services"
        as="/services"
      />
      <QuestionElem
        image={imgRocket}
        title="What have I done?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        href="/projects"
        as="/projects"
      />
    </StyledQuestionsBox>
  </StyledHomeQuestions>
);

export default HomeQuestions;
