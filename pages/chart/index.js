import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Overview({ entries }) {
  const months = [
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
  ];

  const totalEmissionsPerTransport = (transport, fuel, month) =>
    Math.floor(
      entries
        .filter((entry) => {
          const hasFuel = fuel ? true : false;
          const givenTransport = entry.transport === transport;
          const givenFuel = entry.fuel === fuel;
          const givenMonth = new Date(entry.date).getMonth() === month;
          return hasFuel
            ? givenFuel && givenTransport && givenMonth
            : givenTransport && givenMonth;
        })
        .reduce((acc, curr) => acc + curr.result, 0)
    );

  const carPetrol = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("car", "petrol", monthIndex)
  );
  const carDiesel = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("car", "diesel", monthIndex)
  );
  const carHybrid = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("car", "hybrid", monthIndex)
  );
  const carElectricStrommix = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("car", "electric-strommix", monthIndex)
  );
  const carElectricRenewable = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("car", "electric-renewable", monthIndex)
  );
  const train = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("train", null, monthIndex)
  );
  const plane = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("plane", null, monthIndex)
  );
  const bicycle = months.map((_, monthIndex) =>
    totalEmissionsPerTransport("bycicle", null, monthIndex)
  );

  const data = {
    labels: months,
    datasets: [
      {
        label: "Car petrol",
        data: carPetrol,
        backgroundColor: "violet",
      },
      {
        label: "Car diesel",
        data: carDiesel,
        backgroundColor: "orange",
      },
      {
        label: "Car hybrid",
        data: carHybrid,
        backgroundColor: "yellow",
      },
      {
        label: "Car Electric-Strommix",
        data: carElectricStrommix,
        backgroundColor: "pink",
      },
      {
        label: "Car Electric-Renewable",
        data: carElectricRenewable,
        backgroundColor: "turquoise",
      },
      {
        label: "Train",
        data: train,
        backgroundColor: "lightgreen",
      },
      {
        label: "Plane",
        data: plane,
        backgroundColor: "coral",
      },
      {
        label: "Bicycle",
        data: bicycle,
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
        <Bar data={data} options={config.options} />
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
