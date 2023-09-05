import { Chart as ChartJS } from "chart.js/auto";
import { useRouter } from "next/router";
import { Bar } from "react-chartjs-2";

    const transportTypes = [
      "Car petrol",
      "Car diesel",
      "Car hybrid",
      "Car Electric-Strommix",
      "Car Electric-Renewable",
      "Plane",
      "Train",
      "Bicycle",
    ];
    const monthLabels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    function getBackgroundColor(index) {
    // Define a function to generate unique colors for each transport type
    const colors = [
      "rgba(255, 99, 132, 0.7)",
      "rgba(54, 162, 235, 0.7)",
      "rgba(255, 206, 86, 0.7)",
      "rgba(75, 192, 192, 0.7)",
      "rgba(5, 112, 112, 0.7)",
      "rgba(3, 32, 158, 0.7)",
      "rgba(204, 94, 163, 0.7)",
      "rgba(204, 167, 94, 0.7)",
    ];
    return colors[index % colors.length];
  };

    const emissionsData = {
      labels: monthLabels,
      datasets: transportTypes.map((transport, index) => ({
        label: transport,
        data: monthLabels.map((month) => {
          // Calculate total CO2 emissions for the specific transport and month
          const totalEmissions = entries
            .filter(
              (entry) =>
                entry.transport === transport && entry.date.includes(month)
            )
            .reduce((acc, entry) => acc + entry.result, 0);

          return totalEmissions;
        }),
        backgroundColor: getBackgroundColor(index), // Define a function to assign unique colors
      })),
    };

    // Create the chart
    /* const ctx = chartRef.current.getContext("2d"); */
    const config = {
      type: "bar",
      data: emissionsData,
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
   [entries];


  export default function OverviewChart({entries}) {
    const router = useRouter();
     /* const chartRef = useRef(null); */
  return (
    <>
      <h2>CO2 Emissions per Means of Transport</h2>
      <div style={{ width: 700 }}>
      <Bar data={emissionsData} config={config} entries={entries}/>
    </div>
      {/* <canvas ref={chartRef}></canvas> */}
      <button onClick={() => router.push("/journey-list")}>
        Back to Journey List
      </button>
    </>
  );
}
