import EditForm from "@/components/EditForm";

export default function EditPage({ selectedEntry }) {
  return (
    <>
      <h3>Edit journey</h3>
      <EditForm formName="editForm" selectedEntry={selectedEntry} />
    </>
  );
}
