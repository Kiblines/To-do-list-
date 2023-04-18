import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
  editTask(task: ITask): void;
}

const TodoTask = ({ task, completeTask, editTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <h3>{task.taskName}</h3>
        <p>{task.deadline}</p>
      </div>
      <button
        className="btn-delete"
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </button>
      <button className="btn-edit" onClick={() => editTask(task)}>
        Edit
      </button>
    </div>
  );
};

export default TodoTask;
