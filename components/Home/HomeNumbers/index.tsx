import React from "react";
import { NumbersElemProps } from "../interfaces";
import { StyledHomeNumbers, StyledNumbersBox, StyledNumbersElem } from "../../../styled/home";

import imgCaffee from "../../../static/images/home/caffee.svg";
import imgCode from "../../../static/images/home/code.svg";
import imgLightning from "../../../static/images/home/lightning.svg";

const NumbersElem: React.FC<NumbersElemProps> = props => (
  <StyledNumbersElem>
    <img src={props.image} alt={props.title} />
    <p>{props.title}</p>
    <p className="number">
      <strong>{props.number}</strong>
    </p>
  </StyledNumbersElem>
);

const HomeNumbers: React.FC = () => (
  <StyledHomeNumbers>
    <StyledNumbersBox>
      <NumbersElem image={imgCaffee} title="Wypitych kaw" number="1 500+" />
      <NumbersElem image={imgCode} title="Linijek kodu" number="1 000 000+" />
      <NumbersElem image={imgLightning} title="Poznanych technologii" number="20+" />
    </StyledNumbersBox>
  </StyledHomeNumbers>
);

export default HomeNumbers;
