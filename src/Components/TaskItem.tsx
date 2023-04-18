import React from "react";
import Button from "./Button";
import { Task } from "../types/task";

type TaskProps = {
  task: Task;
};

export default function TaskItem(props: TaskProps) {
  return (
    <div>
      <p>{props.task.name}</p>
      <Button onClick={() => {}} name={"Delete"}></Button>
      <Button onClick={() => {}} name={"Edit"}></Button>
    </div>
  );
}
