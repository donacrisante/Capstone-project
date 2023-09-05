import Overview from "@/pages/overview";
import { useState } from "react";

export default function ChartData() {
  /* Chartjs requires an object which contains 2 properties: labels and datasets */
  

  return (
    <Overview  />
  )
};
    /* const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "June",
      "July", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]; */
  
    // Initialize an object to store emissions per transport type
    /* const emissionsByTransport = {
      "Car petrol": Array(12).fill(0),
      "Car diesel": Array(12).fill(0),
      "Car hybrid": Array(12).fill(0),
      "Car Electric-Strommix": Array(12).fill(0),
      "Car Electric-Renewable": Array(12).fill(0),
      "Train": Array(12).fill(0),
      "Plane": Array(12).fill(0),
      "Bicycle": Array(12).fill(0),
    }; */
  
    // Calculate CO2 emissions for each entry and update the data
    /* entries.forEach((entry) => {
      const monthIndex = months.indexOf(entry.date.split('-')[1]);
      if (monthIndex !== -1) {
        const transportKey = `${entry.transport} ${entry.fuel}`;
        emissionsByTransport[transportKey][monthIndex] += entry.result;
      }
    }); */
  
    /* const labels = months;
    const datasets = Object.keys(emissionsByTransport).map((transport) => ({
      label: transport,
      data: emissionsByTransport[transport],
      backgroundColor: ["violet", "pink", "yellow", "orange", "lightblue", "coral", "turquoise", "lightgreen"],
    }));
  
    return { labels, datasets };
  } */