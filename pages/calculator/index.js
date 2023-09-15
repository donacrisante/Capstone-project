import styled from "styled-components";
import EntryForm from "@/components/EntryForm/EntryForm";
import Heading from "@/components/Header/Header";

export default function Calculator({ onSubmit, result, onCalculateCo2 }) {
  return (
    <>
        <Heading>
          Calculator
        </Heading>
        <EntryForm
          formName="calculator"
          onSubmit={onSubmit}
          result={result}
          onCalculateCo2={onCalculateCo2}
        />
    </>
  );
}
