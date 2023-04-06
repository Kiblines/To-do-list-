import { useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodolist] = useState<ITask[]>([]);
  const [editableTask, setEditableTask] = useState<ITask | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    if (task.trim() !== "") {
      const newTask = { taskName: task, deadline: deadline };
      setTodolist([...todoList, newTask]);
      setTask("");
      setDeadline(0);
    }
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodolist(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const clearAllTasks = (): void => {
    setTodolist([]);
  };

  const editTask = (taskToEdit: ITask): void => {
    setEditableTask(taskToEdit);
    setTask(taskToEdit.taskName);
    setDeadline(taskToEdit.deadline);
  };

  const saveTask = (): void => {
    if (editableTask) {
      const updatedTaskList = todoList.map((task) => {
        if (task === editableTask) {
          return { taskName: task.taskName, deadline: deadline };
        } else {
          return task;
        }
      });
      setTodolist(updatedTaskList);
      setEditableTask(null);
      setTask("");
      setDeadline(0);
    }
  };

  const cancelEdit = (): void => {
    setEditableTask(null);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className="header">
        <input
          className="input"
          type="text"
          name="task"
          value={task}
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <input
          className="input"
          type="number"
          name="deadline"
          value={deadline}
          placeholder="Deadline"
          onChange={handleChange}
        />
        {editableTask ? (
          <>
            <button onClick={saveTask}>Save</button>
            <button onClick={cancelEdit}>Cancel</button>
          </>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
        <button onClick={clearAllTasks}>Clear All</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask
              key={key}
              task={task}
              completeTask={completeTask}
              editTask={editTask}
            />
          );
        })}
      </div>
      <div className="list"></div>
      <div className="txt">
        <p>
          A to-do list is a powerful tool for staying organized and productive
          throughout your day.
        </p>
      </div>
    </div>
  );
};

export default App;
``;
