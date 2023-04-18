import React from "react";

type ButtonProps = {
  onClick: () => void;
  name: string;
};

export default function Button(props: ButtonProps) {
  return <button>{props.name}</button>;
}
