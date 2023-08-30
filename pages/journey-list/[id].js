import { useRouter } from "next/router";
import EntryForm from "@/components/EntryForm";

export default function EditPage({
  entries,
  onHandleEdit,
  onHandleDelete,
}) {
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
          entries={entries}
          selectedEntry={selectedEntry}
          onSubmit={onHandleEdit}
          onHandleDelete={onHandleDelete}
        />
      </section>
      <button onClick={() => router.back()}>Cancel</button>
    </>
  );
}
