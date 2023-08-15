import GlobalStyle from "@/styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {


  

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
