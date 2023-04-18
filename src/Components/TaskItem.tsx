import React from "react";
import Button from "./Button";

type TaskProps = {
  task: string;
  deadline: string;
};

export default function Task(props: TaskProps) {
  return (
    <div>
      <p>
        {props.task} {props.deadline}
      </p>
      <Button onClick={() => {}} name={"Delete"}></Button>
      <Button onClick={() => {}} name={"Edit"}></Button>
    </div>
  );
}
