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

  const [selectedEntry, setSelectedEntry] = useLocalStorageState("selectedEntry", {
    defaultValue: [],
   }); 

  const [updatedEntry, setUpdatedEntry] = useLocalStorageState("updatedEntry", {
    defaultValue: [],
   }); 

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleShowFavouriteEntries() {
    setFilter("favourites");
  }

  function handleFormSubmit(newEntry) {    
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
    router.push("/journeyList");
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
        selectedEntry={selectedEntry}
        setSelectedEntry={setSelectedEntry}
        updatedEntry={updatedEntry}
        setUpdatedEntry={setUpdatedEntry}
        id={id}
      />
    </>
  );
}
