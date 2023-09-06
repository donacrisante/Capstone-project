import styled from "styled-components";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Overview({ entries }) {
  const totalEmissionsPerTransport = (transport, fuel, month) =>
    Math.floor(
      entries
        .filter(
          (entry) =>
            entry.transport === transport &&
            entry.fuel === fuel /* &&
            new Date(entry.date).getMonth() === month */
        )
        .reduce((acc, curr) => acc + curr.result, 0)
    );

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

  /* const transportData = [
    "car petrol",
    "car diesel",
    "car hybrid",
    "car electric-strommix",
    "car electric-renewable",
    "train",
    "plane",
    "bicycle",
  ];

  const monthlyData = months.map((month, monthIndex) => ({
    month,
    data: transportData.map((transport) =>
      totalEmissionsPerTransport(transport, monthIndex)
    ),
  })); */

  const carPetrol = totalEmissionsPerTransport("car", "petrol");
  const carDiesel = totalEmissionsPerTransport("car", "diesel");
  const carHybrid = totalEmissionsPerTransport("car", "hybrid");
  const carElectricStrommix = totalEmissionsPerTransport(
    "car",
    "electric-strommix"
  );
  const carElectricRenewable = totalEmissionsPerTransport(
    "car",
    "electric-renewable"
  );
  const train = totalEmissionsPerTransport("train");
  const plane = totalEmissionsPerTransport("plane");
  const bicycle = totalEmissionsPerTransport("bicycle");

  /* const data = {
    labels: months,
    datasets: transportData.map((transport, index) => ({
      label: transport,
      data: monthlyData.map((transport) => transport.data[index]),
      backgroundColor: [
        "#FF5733", // Red
        "#33FF57", // Green
        "#5733FF", // Blue
        "#FF33B8", // Pink
        "#33FFB8", // Turquoise
        "#FFC933", // Yellow
        "#33C9FF", // Light Blue
        "#FF3385", // Coral
      ]
    })),
  }; */

    const data = {
    labels: months,
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
