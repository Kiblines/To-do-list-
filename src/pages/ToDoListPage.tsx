import React from "react";
import Title from "../Components/Title";
import Button from "../Components/Button";
import Content from "../Components/Content";

export default function ToDoListPage() {
  return (
    <div>
      <Title title={"Quentin"}></Title>
      <input type="text" placeholder="Task"></input>
      <input type="date" placeholder="Deadline"></input>
      <Button onClick={() => {}} name={"Add Task"}></Button>
      <Button onClick={() => {}} name={"Clear"}></Button>
      <Content></Content>
    </div>
  );
}
