import React, { useState } from "react";
import Title from "../Components/Title";
import Button from "../Components/Button";
import Content from "../Components/Content";
import styled from "styled-components";
import Lines from "../assets/images/logo.png";
import { Task } from "../types/task";
import TaskList from "../Components/TaskList";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
const Logo = styled.img`
  width: 50vh;
  height: 10vh;
  margin: 20px;
`;

const TaskInput = styled.input`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 40%;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10vh;
  width: 50%;
`;

export default function ToDoListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState("");
  const [taskDeadline, setTaskDeadline] = useState(new Date());
  const [taskIDCounter, setTaskIdCounter] = useState(0);

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleTaskDeadlineChange = (
    event: React.ChangeEvent<HTMLInputElement> //Chercher un type
  ) => {
    setTaskDeadline(new Date(event.target.value));
  };

  const handleAddTask = () => {
    const newTask = {
      name: taskName,
      deadline: taskDeadline,
      id: taskIDCounter,
    };
    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskDeadline(new Date());
    setTaskIdCounter(taskIDCounter + 1);
    console.log("handleAddTask");
  };

  const editTask = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        // Comparaison de l'id du tableau à l'id en paramètre
        return updatedTask;
      } else return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Title title={"ToDoList"}></Title>

      <TaskInput></TaskInput>
      <FlexWrapper>
        <input
          type="text"
          placeholder="Task"
          value={taskName}
          onChange={handleTaskNameChange}
        ></input>
        <input
          type="date"
          placeholder="Deadline"
          value={taskDeadline.toString()} //changement d'une Date en String
          onChange={handleTaskDeadlineChange}
        ></input>

        <Button onClick={handleAddTask} name={"Add Task"}></Button>
        <Button onClick={() => setTasks([])} name={"Clear"}></Button>
      </FlexWrapper>
      <TaskList onEditTask={editTask} tasks={tasks}></TaskList>

      <FlexContainer>
        <Logo src={Lines}></Logo>
        <Content></Content>
      </FlexContainer>
    </div>
  );
}
