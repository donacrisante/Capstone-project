import GlobalStyle from "@/styles";
import Head from "next/head";
import { uid } from "uid";
import { useState } from "react";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "@/components/NavBar/NavBar";
import Toast from "@/components/Toast/Toast";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });

  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: "all",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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

  function handleShowToast(message) {
    setToastMessage(message);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2500);
  }

  function handleEdit(updatedEntry) {
    setEntries(
      entries.map((entry) =>
        entry.id === updatedEntry.id ? { ...entry, ...updatedEntry } : entry
      )
    );
    handleShowToast("Entry edited successfully!");
    router.back();
  }

  function handleDelete(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
    handleShowToast("Entry deleted successfully!");
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
      <NavBar />
      <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
    </>
  );
}

