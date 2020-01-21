import React from "react";
import { StyledHomeQuestions, StyledQuestionsBox, StyledQuestionsElem } from "../../../styled/home";
import { LinkButton } from "../../elements";

import imgPerson from "../../../static/images/home/person.svg";
import imgBulb from "../../../static/images/home/bulb.svg";
import imgRocket from "../../../static/images/home/rocket.svg";

const images: string[] = [imgPerson, imgBulb, imgRocket];

const HomeQuestions: React.FC<{ t: any; lang: string }> = ({ t, lang }) => (
  <StyledHomeQuestions>
    <StyledQuestionsBox>
      {t.map((elem: any, index: number) => (
        <StyledQuestionsElem key={index}>
          <img src={images[index]} alt={elem.title} />
          <h4>
            <strong>{elem.title}</strong>
          </h4>
          <p>{elem.description}</p>

          <LinkButton href={elem.href} as={`/${lang + elem.as}`} text={elem.btn} />
        </StyledQuestionsElem>
      ))}
    </StyledQuestionsBox>
  </StyledHomeQuestions>
);

export default HomeQuestions;
