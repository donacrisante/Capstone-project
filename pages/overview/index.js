import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
/* import { Utils } from "chart.js"; */

/* const DATA_COUNT = 8;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 }; */

/* Chartjs requires an object which contains 2 properties: labels and datasets */
const data = {
  labels: [
    "Car Petrol",
    "Car Diesel",
    "Car Hybrid",
    "Car Electric-Strommix ",
    "Car Electric-Renewable",
    "Train",
    "Plane",
    "Bicycle",
  ],
  datasets: [
    {
      label: "CO2 emissions",
      data: ["38", "56", "20", "19", "0", "67", "300", "0" ] /* Utils.numbers(NUMBER_CFG) */,
      backgroundColor: [
        "blue",
        "red",
        "yellow",
        "green",
        "violet",
        "orange",
        "pink",
        "coral",
      ] /* Object.values(Utils.CHART_COLORS) */,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

export default function Overview() {
  return (
    <div style={{ width: 700 }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

/* const DATA_COUNT = 8;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  const data = {
    labels: [
      "Car Petrol",
      "Car Diesel",
      "Car Hybrid",
      "Car Electric-Strommix ",
      "Car Electric-Renewable",
      "Train",
      "Plane",
      "Bicycle",
    ],
    datasets: [
      {
        label: "Dataset 1",
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  }; */

/*   const [userData, setUserData] = useState({
    labels: entries.map((entry) => entry.transport),
    datasets: [{
        label: "CO2 emissions",
        backgroundColor: ["blue", "red"] Object.values(Utils.CHART_COLORS),
        data: entries.map((entry) => entry.result)
    }]
}) */
