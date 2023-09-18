import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgressbar } from "react-circular-progressbar";
import Heading from "@/components/Header/Header";

export default function HomePage({ entries }) {
  const [co2Emission, setCo2Emission] = useState(0);
  const [showMaxValuePopup, setShowMaxValuePopup] = useState(false);
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
    if (monthlyEmissions >= 2000) {
      setShowMaxValuePopup(true);
    }
  }, [entries]);

  const closePopup = () => {
    setShowMaxValuePopup(false);
  };

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
        {showMaxValuePopup && (
          <MaxValuePopup>
            You've already reached the recommended limit of 2000 kg of CO<sub>2</sub> per person per year!
            <button onClick={closePopup}>Close</button>
          </MaxValuePopup>
        )}
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

const MaxValuePopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;
