import { Doughnut } from "react-chartjs-2";

export default function Chart({ entries }) {
    return (
        <Doughnut data={entries} />
    )
}