import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Heading from "@/components/Header/Header";

export default function HomePage({ entries }) {
  const [co2Emission, setCo2Emission] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const monthlyEmissions = entries.reduce((total, entry) => {
      const entryDate = new Date(entry.date);
      const entryMonth = entryDate.getMonth();

      if (entryMonth === currentMonth) {
        total += entry.result;
      }

      return total;
    }, 0);

    setCo2Emission(monthlyEmissions);
  }, [entries]);

  return (
    <>
      <Head>
        <title>
          CO<sub>2</sub>Mobility Tracker
        </title>
        <meta name="description" content="Dona Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading>Mobility</Heading>
        <StyleDiv>
          <p>
            Hi Dona! Here your mobility CO<sub>2</sub> emissions for this month:
          </p>
        </StyleDiv>
        <div style={{ width: "200px", margin: "0 auto" }}>
          <CircularProgressbar
            value={co2Emission}
            maxValue={1000}
            text={`${co2Emission.toFixed(2)} kg`}
            styles={buildStyles({
              pathColor: `#3498db`, // Customize the progress bar color
              textColor: "#3498db", // Customize the text color
              trailColor: "#d6d6d6", // Customize the trail color
            })}
          />
        </div>
        <button type="button" onClick={() => router.push("/calculator/")}>
          Let's add more journeys!
        </button>
      </main>
    </>
  );
}

const StyleDiv = styled.div`
  margin: 60px;
`;
