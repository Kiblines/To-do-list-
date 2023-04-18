import React from "react";
import Title from "../Components/Title";
import Button from "../Components/Button";

export default function ToDoListPage() {
  return (
    <div>
      <Title title={"Quentin"}></Title>
      <Button onClick={() => {}} button={"Add Task"}></Button>
      <Button onClick={() => {}} button={"Edit"}></Button>
    </div>
  );
}
