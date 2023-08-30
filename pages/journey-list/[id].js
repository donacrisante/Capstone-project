import { useRouter } from "next/router";
import EntryForm from "@/components/EntryForm";

export default function EditPage({ onHandleEdit, entries }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedEntry = entries.find((entry) => entry.id === id);

  if (!selectedEntry) {
    return <div>No journey found</div>;
  }

  return (
    <>
      <section>
        <EntryForm
          formName="editForm"
          formTitle="Edit journey:"
          buttonText="Save"
          selectedEntry={selectedEntry}
          onSubmit={onHandleEdit}
  
        />
      </section>
      <button onClick={() => router.back()}>Cancel</button>
    </>
  );
}
