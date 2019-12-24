import React from "react";

interface Props {
  text: string;
}

export default function Heading(props: Props) {
  return <h2>{props.text}</h2>;
}
