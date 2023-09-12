import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";

export default function Overview({ entries }) {
  const [dateType, setDateType] = useState("week");

  const dates = getDateRange(dateType);

  const transportTypes = [
    "car petrol",
    "car diesel",
    "car hybrid",
    "car electric-strommix",
    "car electric-renewable",
    "train",
    "plane",
    "bicycle",
  ];

  function getDateRange(dateType) {
    const today = new Date();
    const dates = [];

    if (dateType === "week") {
      for (let i = 0; i < 5; i++) {
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - i * 7);
        dates.push(weekStart.toLocaleDateString());
      }
    } else if (dateType === "month") {
      for (let i = 0; i < 12; i++) {
        const monthStart = new Date(today);
        monthStart.setMonth(today.getMonth() - i);
        dates.push(
          monthStart.toLocaleDateString("default", { month: "short" })
        );
      }
    } else if (dateType === "year") {
      for (let i = 0; i < 5; i++) {
        const yearStart = new Date(today);
        yearStart.setFullYear(today.getFullYear() - i);
        dates.push(yearStart.getFullYear().toString());
      }
    }

    return dates.reverse();
  }

  function generateChartData(transportTypes, dates) {
    return {
      labels: dates,
      datasets: transportTypes.map((transport, index) => ({
        label: transport,
        data: dates.map((date) =>
          totalEmiPerTransport(transport, date, entries)
        ),
        backgroundColor: getBackgroundColor(index),
      })),
    };
  }

  function totalEmiPerTransport(transport, date, entries) {
    const filteredEntries = entries.filter((entry) => {
      const entryDate = new Date(entry.date).toLocaleDateString();
      return entry.transport === transport && entryDate === date;
    });

    const totalEmissions = filteredEntries.reduce(
      (acc, entry) => acc + entry.result,
      0
    );

    return totalEmissions;
  }

  function getBackgroundColor(index) {
    const colors = [
      "violet",
      "orange",
      "yellow",
      "pink",
      "turquoise",
      "lightgreen",
      "coral",
      "lightblue",
    ];

    return colors[index % colors.length];
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const data = generateChartData(transportTypes, dates);

  const changeDateType = (newDateType) => {
    setDateType(newDateType);
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: `CO2 Emissions per Means of Transport (${capitalizeFirstLetter(
            dateType
          )})`,
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
        <Bar data={data} options={config.options} />
      </Chart>
      <button type="button" onClick={() => changeDateType("week")}>
        Weekly
      </button>
      <button type="button" onClick={() => changeDateType("month")}>
        Monthly
      </button>
      <button type="button" onClick={() => changeDateType("year")}>
        Yearly
      </button>
    </>
  );
}

const Chart = styled.div`
  width: 700px;
`;




