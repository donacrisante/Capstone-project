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

  const [result, setResult] = useLocalStorageState("result", {
    defaultValue: 0,
  });

  const [isFavourite, setIsFavourite] = useLocalStorageState("favourite", {
    defaultValue: "false",
  });

  function handleShowAllEntries() {
    setFilter("all");
    /* setIsFavouriteTabActive(true); */
  }

  function handleShowFavouriteEntries() {
    setFilter("favourites");
    /* setIsFavouriteTabActive(false); */
  }

  /* const [isFavouriteTabActive, setIsFavouriteTabActive] = useLocalStorageState("favouriteTab", {
    defaultValue: "false",
  }); */

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    console.log(newEntry);
    event.target.reset();
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
        isFavourite={isFavourite}
        /* isFavouriteTabActive={isFavouriteTabActive} */
        onToggleFavourite={handleToggleFavourite}
        result={result}
        setResult={setResult}
      />
    </>
  );
}
