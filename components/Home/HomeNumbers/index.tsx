import React from "react";
import { StyledHomeNumbers, StyledNumbersBox, StyledNumbersElem } from "../../../styled/home";

import imgCaffee from "../../../static/images/home/caffee.svg";
import imgCode from "../../../static/images/home/code.svg";
import imgLightning from "../../../static/images/home/lightning.svg";

const images: string[] = [imgCaffee, imgCode, imgLightning];

const HomeNumbers: React.FC<{ t: any }> = ({ t }) => (
  <StyledHomeNumbers>
    <StyledNumbersBox>
      {t.map((elem: any, index: number) => (
        <StyledNumbersElem key={index}>
          <img src={images[index]} alt={elem.title} />
          <p>{elem.title}</p>
          <p className="number">
            <strong>{elem.number}</strong>
          </p>
        </StyledNumbersElem>
      ))}
    </StyledNumbersBox>
  </StyledHomeNumbers>
);

export default HomeNumbers;
