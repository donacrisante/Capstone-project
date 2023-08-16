import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import EntryForm from "@/components/EntryForm";
import { uid } from "uid";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const router = useRouter();
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });

   const [filter, setFilter] = useLocalStorageState("filter", {
  defaultValue: "all",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    // console.log("hallo hier");
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    event.target.reset();
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
    router.push("/journeyList");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }
  
  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Heading>CO<sub>2</sub>-Mobility-Tracker</Heading>
        <EntryForm formName={"calculator"} handleFormSubmit={handleFormSubmit}/>
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
