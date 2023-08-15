import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });
  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: "all",
  });

  

  function handleShowAllEntries() {
    setFilter("all");
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps}  />
    </>
  );
}
