import React from "react";

type ButtonProps = {
  onClick: () => void;
  button: string;
};

export default function Button(props: ButtonProps) {
  return <button>{props.button}</button>;
}
