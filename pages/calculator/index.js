import EntryForm from "@/components/EntryForm/EntryForm";
import styled from "styled-components";
import Heading from "@/components/Header/Header";

export default function Calculator({ onSubmit, result, onCalculateCo2 }) {
  return (
    <>
      <Heading>Calculator</Heading>
      <StyleDiv>
        <EntryForm
          onSubmit={onSubmit}
          result={result}
          onCalculateCo2={onCalculateCo2}
        />
      </StyleDiv>
    </>
  );
}

const StyleDiv = styled.div`
  margin: 60px;
`;
