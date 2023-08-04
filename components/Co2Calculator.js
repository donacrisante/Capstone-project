import { useState } from "react";

export default function Co2Calculator() {

    /* const co2Values = [
        { name: "Petrol", value: 0.189 },
        { name: "Diesel", value: 0.1855 },
        { name: "Hybrid", value: 0.0948 },
        { name: "ElectricStrommix", value: 0.07812 },
        { name: "ElectricEco", value: 0 },
        { name: "Plane", value: 0.230 },
        { name: "Train", value: 0.032 },
        { name: "Bicycle", value: 0 },
    ] */

    const [km, SetKm] = useState(0);
    const [result, setResult] = useState(0);
}