import { useState, ChangeEvent } from "react";
import "./App.css";
import { ITask } from "./interfaces";
import TodoTask from "./Components/TodoTask";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodolist] = useState<ITask[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [editingTask, setEditingTask] = useState<ITask | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else if (event.target.name === "deadline") {
      setDeadline(Number(event.target.value));
    } else {
      setSearchTerm(event.target.value);
    }
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (editingTask) {
      setEditingTask({
        ...editingTask,
        [name]: value,
      });
    }
  };

  const handleUpdateChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodoList = todoList.map((task) => {
      if (task.taskName === editingTask?.taskName) {
        return { ...task, ...editingTask };
      }
      return task;
    });
    setTodolist(newTodoList);
    setEditingTask(null);
  };

  const addTask = (): void => {
    if (task.trim() !== "") {
      // trim() removes whitespace from both sides of a string (in this case, the task)
      const newTask = { taskName: task, deadline: deadline };
      setTodolist([...todoList, newTask]);
      console.log(todoList);
      setTask("");
      setEditingTask(null); // Reset editing task to null when adding a new task
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  const handleSearch = (): void => {
    const filteredTasks = todoList.filter((task) =>
      task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTodolist(filteredTasks);
  };

  const filteredTasks = todoList.filter((task) =>
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const editTask = (index: number): void => {
    setEditingTask(todoList[index]);
  };

  const updateTask = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const newTodoList = todoList.map((task) => {
      if (task.taskName === editingTask?.taskName) {
        return { ...task, ...editingTask };
      }
      return task;
    });

    setTodolist(newTodoList);
    setEditingTask(null);
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
          onKeyDown={handleKeyDown}
        ></input>
        <input
          className="input"
          type="number"
          name="deadline"
          value={deadline}
          placeholder="Deadline"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearAllTasks}>Clear All</button>
      </div>

      <div className="todoList">
        {filteredTasks.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
      <div className="search">
        <input
          className="input"
          type="text"
          name="search"
          placeholder="Search for a task"
          value={searchTerm}
          onChange={handleChange}
        ></input>
      </div>
      <button className="btn-edit" onClick={() => editTask(task)}>
        Edit
      </button>

      {editingTask ? (
        <form onSubmit={updateTask}>
          <input
            type="text"
            name="taskName"
            value={editingTask.taskName}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="deadline"
            value={editingTask.deadline}
            onChange={handleEditChange}
          />
          <button type="submit">Update Task</button>
        </form>
      ) : null}

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
