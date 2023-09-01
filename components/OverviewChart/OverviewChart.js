import { Doughnut } from "react-chartjs-2";

export default function OverviewChart({ entries }) {
    
    return (
        <Doughnut data={entries} />
    )
}



/* const config = {
    type: 'doughnut',
    data: entries,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'CO2 emissions'
        }
      }
    },
  }; */