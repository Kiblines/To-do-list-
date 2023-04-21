import React from "react";

type ButtonProps = {
  onClick: () => void;
  name: string;
};

export default function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.name}</button>;
}
