import Head from "next/head";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
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
        {/* <Background /> */}
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
          >
            <CityImage
              src="SustainableCity.jpg"
              alt="sustainable city"
            />
          </StyledCircularProgressbar>
        </StyledBar>
        {showMaxValuePopup && (
          <MaxValuePopup>
            You have already reached the recommended limit of 2000 kg of CO
            <sub>2</sub> per person per year!
            <button onClick={closePopup}>Close</button>
          </MaxValuePopup>
        )}
        <ButtonContainer>
          <Button type="button" onClick={() => router.push("/calculator/")}>
            Let&apos;s calculate your CO<sub>2</sub> emissions!
          </Button>
        </ButtonContainer>
      </main>
    </>
  );
}

const StyleDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 60px;
  text-align: center;
`;

const StyledBar = styled.div`
  width: 220px;
  margin: 0 auto;
`;

const StyledCircularProgressbar = styled(CircularProgressbarWithChildren)`
  path {
    stroke: #5e8c61;
    stroke-width: 8px;
    stroke-linecap: round;
    transition: stroke-dashoffset 1.5s;
  }
  text {
    margin-top: 10px;
    fill: black;
    font-size: 10px;
    font-weight: bold;
    text-anchor: middle;
    dominant-baseline: middle;
    transform: translate(0%, -20%);
  }
  .CircularProgressbar-trail {
    stroke: #94e8b4;
    stroke-width: 8px;
  }
`;

const CityImage = styled.img`
  margin-top: -10px;
  width: 210px;
  height: 210px;
  z-index: -1;
  border-radius: 100px;
`;

/* const Background = styled.div`
  background-color: #5e8c61;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.7;
`; */

const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 297px;
  height: 44px;
  flex-shrink: 0;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: bold;
  border-radius: 50px;
  border-style: none;
  background: #5e8c61;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25);
`;

const ButtonContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin: 40px 0px 40px 40px;

  @media (max-width: 768) {
    left: 2%;
    transform: translateX(-10%);
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
