import GlobalStyle from "@/styles";
import Head from "next/head";
import { calculator } from "@/library/calculator";
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

  /* const [result, setResult] = useLocalStorageState("result", {
    defaultValue: 0,
  }); */

  const [isFavourite, setIsFavourite] = useLocalStorageState("favourite", {
    defaultValue: "false",
  });

  function handleShowAllEntries() {
    setFilter("all");
  }

  function handleShowFavouriteEntries() {
    setFilter("favourites");
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    const transport = newEntry.transport;
    const km = newEntry.km;
    const fuel = newEntry.fuel;
    const result = (handleCalculateCo2(transport, km, fuel))
    newEntry.result = result;
    console.log(newEntry);
    console.log(result);
    event.target.reset();
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
    router.push("/journeyList");
  }

  function handleCalculateCo2(transport, km, fuel) {
    const selectedTransport = transport === "car" ? fuel : transport;
    return calculator[selectedTransport](km);
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
        onToggleFavourite={handleToggleFavourite}
        onCalculateCo2={handleCalculateCo2}
        /* result={result}
        setResult={setResult} */
      />
    </>
  );
}
