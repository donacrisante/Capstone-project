import { useRouter } from "next/router";
import EntryForm from "@/components/EntryForm/EntryForm";
import styled from "styled-components";

export default function EditPage({ onHandleEdit, entries }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedEntry = entries.find((entry) => entry.id === id);

  if (!selectedEntry) {
    return <div>No journey found</div>;
  }

  return (
    <>
      <StyledForm>
          <EntryForm
            formName="editForm"
            formTitle="Edit journey:"
            selectedEntry={selectedEntry}
            onSubmit={onHandleEdit}
            buttonText="Save"
          />
        <Button onClick={() => router.back()}>Cancel</Button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.div`
  margin: 20px 60px;
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  margin: 20px 0px 10px 40px;
  width: 150px;
  height: 30px;
  flex-shrink: 0;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: bold;
  border-radius: 50px;
  border-style: none;
  background: #5e8c61;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25);
`;
