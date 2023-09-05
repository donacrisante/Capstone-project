import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Overview({ entries }) {
  const carPetrol = Math.floor(
    entries
      .filter((entry) => entry.transport === "car")
      .filter((entry) => entry.fuel === "petrol")
      .reduce((acc, curr) => acc + curr.result, 0)
  );

  const carDiesel = Math.floor(
    entries
      .filter((entry) => entry.transport === "car")
      .filter((entry) => entry.fuel === "diesel")
      .reduce((acc, curr) => acc + curr.result, 0)
  );

  const carHybrid = Math.floor(
    entries
      .filter((entry) => entry.transport === "car")
      .filter((entry) => entry.fuel === "hybrid")
      .reduce((acc, curr) => acc + curr.result, 0)
  );

  const carElectricStrommix = Math.floor(
    entries
      .filter((entry) => entry.transport === "car")
      .filter((entry) => entry.fuel === "electric-strommix")
      .reduce((acc, curr) => acc + curr.result, 0)
  );

  const carElectricRenewable = Math.floor(
    entries
      .filter((entry) => entry.transport === "car")
      .filter((entry) => entry.fuel === "electric-renewable")
      .reduce((acc, curr) => acc + curr.result, 0)
  );

  const train = Math.floor(
    entries
      .filter((entry) => entry.transport === "train")
      .reduce((acc, curr) => acc + curr.result, 0)
  );

  const plane = Math.floor(
    entries
      .filter((entry) => entry.transport === "plane")
      .reduce((acc, curr) => acc + curr.result, 0)
  );

  const bicycle = Math.floor(
    entries
      .filter((entry) => entry.transport === "bicycle")
      .reduce((acc, curr) => acc + curr.result, 0)
  );
  console.log(train);

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Car petrol",
        data: [carPetrol],
        backgroundColor: "violet",
      },
      {
        label: "Car diesel",
        data: [carDiesel],
        backgroundColor: "orange",
      },
      {
        label: "Car hybrid",
        data: [carHybrid],
        backgroundColor: "yellow",
      },
      {
        label: "Car Electric-Strommix",
        data: [carElectricStrommix],
        backgroundColor: "pink",
      },
      {
        label: "Car Electric-Renewable",
        data: [carElectricRenewable],
        backgroundColor: "turquoise",
      },
      {
        label: "Train",
        data: [train],
        backgroundColor: "lightgreen",
      },
      {
        label: "Plane",
        data: [plane],
        backgroundColor: "coral",
      },
      {
        label: "Bicycle",
        data: [bicycle],
        backgroundColor: "lightblue",
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: "CO2 Emissions per Means of Transport",
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  };

  return (
    <>
      <Chart>
        <Bar data={data} config={config} />
      </Chart>
      <button type="button">Weekly</button>
      <button type="button">Monthly</button>
      <button type="button">Yearly</button>
    </>
  );
}

const Chart = styled.div`
  width: 700px;
`;
