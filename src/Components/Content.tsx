import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  font-weight: 700;
  font-size: 1.5rem;
  color: #333;
  font-style: italic;
`;

export default function Content() {
  return (
    <ContentWrapper>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perferendis,
      incidunt quo repellendus eum libero veniam? Ullam, obcaecati? Eligendi
      illum, delectus doloribus ullam vero impedit minus accusamus repellat ex
      dolore.
    </ContentWrapper>
  );
}
