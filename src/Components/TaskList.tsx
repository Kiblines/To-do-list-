import React from "react";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onEditTask: (task: Task) => void; // Ajout
};

export default function TaskList(props: TaskListProps) {
  return (
    <div>
      {props.tasks.map((task) => (
        <TaskItem onEditTask={props.onEditTask} task={task}></TaskItem>
      ))}
    </div>
  );
}
