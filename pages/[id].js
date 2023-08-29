import { useRouter } from "next/router";
import EntryForm from "@/components/EntryForm";

export default function EditPage({ entries, onHandleEdit, onHandleDelete }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedEntry = entries.find((entry) => entry.id === id);

  if (!selectedEntry) {
    return <div>no journey found</div>;
  }

  console.log(id);
  return (
    <>
      <h3>Edit journey</h3>
      <EntryForm
        formName="editForm"
        buttonText="Edit Journey"
        entries={entries}
        selectedEntry={selectedEntry}
        onHandleEdit={onHandleEdit}
        onHandleDelete={onHandleDelete}
      />
      <button onClick={() => router.back()}>Cancel</button>
    </>
  );
} 