import React from "react";

interface Props {
  title: string;
  onClick: any;
}

export default function Button(props: Props) {
  return <button onClick={props.onClick}>{props.title}</button>;
}
