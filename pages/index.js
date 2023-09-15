import Head from "next/head";
import styled from "styled-components";
import { Inter } from "next/font/google";
import EntryForm from "@/components/EntryForm/EntryForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ onSubmit, result, onCalculateCo2 }) {
  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Heading>
          CO<sub>2</sub>-Mobility-Tracker
        </Heading>
        <EntryForm
          formName="calculator"
          onSubmit={onSubmit}
          result={result}
          onCalculateCo2={onCalculateCo2}
        />
      </main>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
`;
