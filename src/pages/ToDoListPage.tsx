import React from "react";
import Title from "../Components/Title";
import Button from "../Components/Button";
import Content from "../Components/Content";
import styled from "styled-components";
import Lines from "../assets/images/logo.png";

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

export default function ToDoListPage() {
  return (
    <div>
      <Title title={"ToDoList"}></Title>
      <input type="text" placeholder="Task"></input>
      <input type="date" placeholder="Deadline"></input>
      <Button onClick={() => {}} name={"Add Task"}></Button>
      <Button onClick={() => {}} name={"Clear"}></Button>
      <FlexContainer>
        <Logo src={Lines}></Logo>
        <Content></Content>
      </FlexContainer>
    </div>
  );
}
