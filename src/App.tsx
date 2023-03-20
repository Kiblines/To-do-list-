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
    const newTask = { taskName: task, deadline: deadline };
    setTodolist([...todoList, newTask]);
    console.log(todoList);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodolist(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <h1>To-do List</h1>
      <h2>Count </h2>
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
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>

      <div className="list">
        <h2>ur not prepared</h2>
        <img src="https://pbs.twimg.com/media/Eun2nU_XMAME5Fh.jpg"></img>
      </div>
      <div className="txt">
        <p>
          A to-do list is a powerful tool for staying organized and productive
          throughout your day. By writing down tasks and prioritizing them, you
          can ensure that you are using your time effectively and making
          progress towards your goals. Here are some tips for creating a helpful
          and effective to-do list: Start with the most important tasks: Begin
          your list by identifying the most critical tasks that need to be
          completed. These are the tasks that will have the biggest impact on
          your day or week, and that you should focus on completing first. Break
          down larger tasks: If you have a large task on your list, it can be
          helpful to break it down into smaller, more manageable steps. This can
          help you stay focused and avoid feeling overwhelmed. Set deadlines:
          Assigning deadlines to each task on your list can help you stay on
          track and ensure that you are making progress towards your goals. Make
          sure to set realistic deadlines that you can realistically meet.
          Prioritize your list: Once you have your tasks listed out, prioritize
          them in order of importance. This will help you focus on the most
          important tasks first, and ensure that you are using your time
          effectively. Review and update regularly: It's important to regularly
          review and update your to-do list to ensure that it remains relevant
          and helpful. Take some time at the end of each day to review what you
          accomplished and update your list for the following day. By following
          these tips, you can create a to-do list that is both helpful and
          effective. Whether you are managing a busy work schedule or simply
          trying to stay organized at home, a to-do list can be a valuable tool
          for achieving your goals and staying on track.
        </p>
      </div>
    </div>
  );
};

export default App;
