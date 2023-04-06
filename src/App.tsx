import { useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodolist] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    if (task.trim() !== "") {
      // trim() removes whitespace from both sides of a string (in this case, the task)
      const newTask = { taskName: task, deadline: deadline };
      setTodolist([...todoList, newTask]);
      console.log(todoList);
      setTask("");
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
        ></input>
        <input
          className="input"
          type="number"
          name="deadline"
          value={deadline}
          placeholder="Deadline"
          onChange={handleChange}
        ></input>
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearAllTasks}>Clear All</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
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
