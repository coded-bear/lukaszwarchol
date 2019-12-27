import React from "react";
import { NumbersElemProps } from "../interfaces";

const NumbersElem: React.FC<NumbersElemProps> = props => (
  <div>
    <img src={props.image} alt={props.title} />
    <p>{props.title}</p>
    <p>
      <strong>{props.number}</strong>
    </p>
  </div>
);

const HomeNumbers: React.FC = () => (
  <section>
    <NumbersElem image="image" title="Wypitych kaw" number="1 500+" />
    <NumbersElem image="image" title="Linijek kodu" number="1 000 000+" />
    <NumbersElem image="image" title="Poznanych technologii" number="20+" />
  </section>
);

export default HomeNumbers;
