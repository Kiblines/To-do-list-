import React, { useState } from "react";
import Button from "./Button";
import { Task } from "../types/task";

type TaskProps = {
  task: Task;
  onEditTask: (task: Task) => void;
};

export default function TaskItem(props: TaskProps) {
  const [isEditActive, setIsEditActive] = useState(false); //On donne le valeur false a la function setIsEditActive & ts comprends que c'est un boolean
  // const toto = () => {
  //   setIsEditActive(true);
  // }

  return !isEditActive ? (
    <div>
      <p>{props.task.name}</p>
      <Button onClick={() => {}} name={"Delete"}></Button>
      <Button onClick={() => setIsEditActive(true)} name={"Edit"}></Button>
    </div>
  ) : (
    <input placeholder="Edit here"></input>
  );
}
