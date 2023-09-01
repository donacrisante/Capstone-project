import OverviewChart from "@/components/OverviewChart/OverviewChart";
import { useState } from "react";

export default function Overview({ entries, entry }) {
    const [userData, setUserData] = useState({
        labels: entries.map((entry) => entry.transport),
        datasets: [{
            label: "CO2 emissions",
            data: entries.map((entry) => entry.result)
        }]
    })
    return (
        <OverviewChart entries={userData} entry={entry} />
    )
}