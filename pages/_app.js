import GlobalStyle from "@/styles";
import Head from "next/head";
import { calculator } from "@/library/calculator";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

export default function App({ Component, pageProps }) {

  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });
  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: "all",
  });

  function handleCalculateCo2(transport, km, fuel) {
    const selectedTransport = transport === "car" ? fuel : transport;
    return calculator[selectedTransport](km);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
  };

  function handleShowAllEntries() {
    setFilter("all");
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps}
      entries={entries}
      filter={filter}
      handleCalculateCo2={handleCalculateCo2}
      handleFormSubmit={handleFormSubmit}
      handleShowAllEntries={handleShowAllEntries}
       />
    </>
  );
}
