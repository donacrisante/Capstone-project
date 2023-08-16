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

  const [[isFavourite, setIsFavourite]] = useLocalStorageState("favourite", { defaultValue: "false",
});

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    console.log(newEntry);
    event.target.reset();
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
    router.push("/journeyList");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleShowFavouriteEntries() {
    setFilter("favourites");
  }

  function handleToggleFavourite(/* id */) {
    setIsFavourite(!isFavourite);
    /* setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavourite: !entry.isFavourite } : entry
      )
    ); */
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} 
      onSubmit={handleFormSubmit} 
      entries={filter === "favourites" ? favouriteEntries : entries}
      onShowAllEntries={handleShowAllEntries}
      onShowFavouriteEntries={handleShowFavouriteEntries}
      onToggleFavourite={handleToggleFavourite} />
    </>
  );
}
