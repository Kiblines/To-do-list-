import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #de2222;
  font-weight: 700;
  font-size: 1.2rem;
  color: #1d1a1a;
  font-style: italic;
  font-family: "Roboto", sans-serif;
  border-radius: 10vh;
  box-shadow: 0 0 10px rgba(4, 0, 0, 0.2);
`;

export default function Content() {
  return (
    <ContentWrapper>
      A to-do list can help you: <br></br> Stay organized: By creating a list of
      tasks to complete, you can prioritize your work and stay on track with
      deadlines and important activities.<br></br>
    </ContentWrapper>
  );
}
