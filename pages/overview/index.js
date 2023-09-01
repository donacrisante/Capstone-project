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

const config = {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  };

export default function Overview() {
  return (
    <div style={{ width: 700 }}>
      <Doughnut data={data} config={config} />
      </div>
  );
}

