import EditForm from "@/components/EditForm";

export default function EditPage({ selectedEntry, updatedEntry }) {
  return (
    <>
      <h3>Edit journey</h3>
      <EditForm
        formName="editForm"
        selectedEntry={selectedEntry}
        updatedEntry={updatedEntry}
      />
    </>
  );
}
