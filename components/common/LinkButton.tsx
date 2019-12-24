import React from "react";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
  as: string;
}

export default function LinkButton(props: Props) {
  return (
    <Link href={props.href} as={props.as} prefetch={false}>
      <a>{props.title}</a>
    </Link>
  );
}
