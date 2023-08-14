import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import JourneyList from "./journeyList";

export default function App({ Component, pageProps }) {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });
  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: "all",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    event.target.reset();
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} handleFormSubmit={handleFormSubmit} />
      <JourneyList
        entries={entries}
        filter={filter}
        handleShowAllEntries={handleShowAllEntries}
      />
    </>
  );
}
