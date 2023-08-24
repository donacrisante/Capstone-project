import { useRouter } from "next/router";
import { useState } from "react";
import EntryForm from "@/components/EntryForm";

export default function EditEntry({
  /* selectedEntry,
  setSelectedEntry,
  updatedEntry,
  setUpdatedEntry, */
}) {

  const router = useRouter();
  const { id } = router.query;
  /* const [edit, setEdit] = useState(false); */

  function handleUpdateEntry() {
    const updatedEntries = entries.map((entry) =>
      entry.id === selectedEntry.id ? updatedEntry : entry
    );
    // vide l'entrée sélectionnée et l'entrée mise à jour
    setSelectedEntry(null);
    setUpdatedEntry(null);
  }

  return (
    <>
      <h3>Edit Entry</h3>
      <EntryForm
      formName="editForm"
      /* edit={edit}
      setEdit={setEdit} */
      onSubmit={handleUpdateEntry} />
      {/* <button onClick={handleUpdateEntry}>Save</button> */}
    </>
  );
}


      
      