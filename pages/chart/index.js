import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import Heading from "@/components/Header/Header";

export default function Overview({ entries, header = "Overview" }) {
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
        dates.push({ date: weekStart, label: weekStart.toLocaleDateString() });
      }
      dates.reverse();
    } else if (dateType === "month") {
      for (let i = 0; i < 12; i++) {
        const monthStart = new Date(today);
        monthStart.setMonth(i);
        monthStart.setDate(1);
        dates.push({
          date: monthStart,
          label: monthStart.toLocaleDateString("default", { month: "short" }),
        });
      }
    } else if (dateType === "year") {
      for (let i = 0; i < 5; i++) {
        const yearStart = new Date(today);
        yearStart.setFullYear(today.getFullYear() - i);
        yearStart.setMonth(0);
        yearStart.setDate(1);
        dates.push({
          date: yearStart,
          label: yearStart.getFullYear().toString(),
        });
      }
      dates.reverse();
    }

    return dates;
  }

  function getBackgroundColor(index) {
    const colors = [
      "violet",
      "orange",
      "yellow",
      "pink",
      "coral",
      "lightgreen",
      "turquoise",
      "lightblue",
    ];

    return colors[index % colors.length];
  }

  function generateChartData(transportTypes, dates) {
    return {
      labels: dates.map((date) => date.label),
      datasets: transportTypes.map((transport, index) => ({
        label: transport,
        data: dates.map((date) =>
          totalEmissionsPerTransport(transport, date, entries)
        ),
        backgroundColor: getBackgroundColor(index),
      })),
    };
  }

  function totalEmissionsPerTransport(transport, date) {
    const filteredEntries = entries.filter((entry) => {
      const entryDate = new Date(entry.date);
      let entryTransportAndFuel = entry.transport;
      if (entry.fuel !== "") {
        entryTransportAndFuel += " " + entry.fuel;
      }
      return (
        entryTransportAndFuel === transport &&
        compareForMultipleDays(
          entryDate,
          date.date,
          dateType === "week" ? 7 : dateType === "month" ? 30 : 365
        )
      );
    });

    const totalEmissions = filteredEntries.reduce(
      (acc, entry) => acc + entry.result,
      0
    );

    return totalEmissions;
  }

  function compareForMultipleDays(date1, date2, nrOfDays) {
    for (let days = 0; days < nrOfDays; days++) {
      var date = new Date(date2);
      date.setDate(date2.getDate() + days);
      let areEqual = compareDates(date1, date);
      if (areEqual) {
        return true;
      }
    }
    return false;
  }

  function compareDates(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
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
      maintainAspectRatio: false,
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
      <Heading>Overview</Heading>
      <StyleDiv>
        <Chart>
          <Bar data={data} options={config.options} />
        </Chart>
      </StyleDiv>
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
  
  width: calc(100%-40px);
  height: 500px;
  margin-right: 20px;
  margin-left: 20px;
`;

const StyleDiv = styled.div`
  margin-top: 50px;
`;
