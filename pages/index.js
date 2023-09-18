import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgressbar } from "react-circular-progressbar";
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
        <Heading>
          CO<sub>2</sub> Mobility Tracker
        </Heading>
        <StyleDiv>
          <p>Hi Dona! This is what you have emitted this month:</p>
        </StyleDiv>
        <StyledBar>
          <StyledCircularProgressbar
            value={co2Emission}
            maxValue={2000}
            text={`${co2Emission.toFixed(2)} kg`}
          />
        </StyledBar>
        <button type="button" onClick={() => router.push("/calculator/")}>
          Let&apos;s add more journeys!
        </button>
      </main>
    </>
  );
}

const StyleDiv = styled.div`
  margin: 60px;
  text-align: center;
`;

const StyledBar = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const StyledCircularProgressbar = styled(CircularProgressbar)`
  path {
    stroke: #3498db;
    stroke-linecap: round;
    transition: stroke-dashoffset 1.5s;
  }
  text {
    fill: #3498db;
    font-size: 12px;
    text-anchor: middle;
    dominant-baseline: middle;
  }
  .CircularProgressbar-trail {
    stroke: #d6d6d6;
  }
`;
