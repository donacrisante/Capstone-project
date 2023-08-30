import GlobalStyle from "@/styles";
import Head from "next/head";
import { uid } from "uid";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });

  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: "all",
  });

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleShowFavouriteEntries() {
    setFilter("favourites");
  }

  function handleFormSubmit(newEntry) {
    setEntries([{ ...newEntry, id: uid() }, ...entries]);
    router.push("/journey-list");
  }

  function handleEdit(updatedEntry) {
    setEntries(
      entries.map((entry) =>
        entry.id === updatedEntry.id ? { ...entry, ...updatedEntry } : entry
      )
    );
    router.back();
    alert("Journey updated successfully!");
  }

  function handleDelete(selectedEntry) {
    
    const confirmed = window.confirm(
      "Are you sure you want to delete this journey?"
    );

    if (confirmed) {
      setEntries(entries.filter((entry) => entry.id !== selectedEntry));
      alert("Journey deleted successfully!");
    } else {
      alert("Journey not deleted.");
    }
  }

  function handleToggleFavourite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavourite: !entry.isFavourite } : entry
      )
    );
  }

  const favouriteEntries = entries.filter((entry) => entry.isFavourite);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        onSubmit={handleFormSubmit}
        entries={filter === "favourites" ? favouriteEntries : entries}
        onShowAllEntries={handleShowAllEntries}
        onShowFavouriteEntries={handleShowFavouriteEntries}
        allEntriesCount={entries.length}
        favouriteEntriesCount={favouriteEntries.length}
        onToggleFavourite={handleToggleFavourite}
        onHandleEdit={handleEdit}
        onHandleDelete={handleDelete}
      />
    </>
  );
}
