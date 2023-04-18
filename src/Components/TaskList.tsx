import React from "react";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
};

export default function TaskList(props: TaskListProps) {
  return <div>TaskList</div>;
}
