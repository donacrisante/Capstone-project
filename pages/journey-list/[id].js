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
      </StyledForm>
    </>
  );
}

const StyledForm = styled.div`
  margin: 20px 60px;
`;