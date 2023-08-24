import styled from "styled-components";
/* import { calculator } from "@/library/calculator"; */
import { useState } from "react";
import { useRouter } from "next/router";

export default function EditForm({ formName, selectedEntry }) {
  const [transport, setTransport] = useState("Select a transport");
  const [date, setDate] = useState(selectedEntry.date);
  const [fuel, setFuel] = useState("Select a car");
  const [km, setKm] = useState(0);
  /* const [result, setResult] = useState(0); */

  const transports = [
    { label: "Car", value: "car" },
    { label: "Plane", value: "plane" },
    { label: "Train", value: "train" },
    { label: "Bicycle", value: "bicycle" },
  ];

  const cars = [
    { label: "Petrol", value: "petrol" },
    { label: "Diesel", value: "diesel" },
    { label: "Hybrid", value: "hybrid" },
    { label: "Electric-Strommix", value: "electric-strommix" },
    { label: "Electric-Renewable", value: "electric-renewable" },
  ];

  function handleDropdownChange(event) {
    setTransport(event.target.value);
  }

  function handleDropdownChangeFuel(event) {
    setFuel(event.target.value);
  }

  function handleKm(event) {
    setKm(event.target.value);
  }

  const router = useRouter();

  function handleBackToList() {
    router.back();
  }

  /* function handleCalculateCo2(transport, km, fuel) {
    const selectedTransport = transport === "car" ? fuel : transport;
    const kmNumber = parseFloat(km.replace(",", "."));
    if (!isNaN(kmNumber)) {
      return calculator[selectedTransport](kmNumber);
    }
    return 0;
  } */

  function handleSaveEditEntry(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  }

  let dateAsDate = new Date();
  if (typeof selectedEntry.date !== "undefined") {
    const dateAsArray = selectedEntry.date.split(".");
    dateAsDate = new Date(
      parseInt(dateAsArray[2]),
      parseInt(dateAsArray[1]) - 1,
      parseInt(dateAsArray[0]) + 1
    );
  }

  return (
    <>
      <Form aria-labelledby={formName} onSubmit={handleSaveEditEntry}>
        <label htmlFor="date">Date: </label>
        <input
          defaultValue={dateAsDate.toISOString().split("T")[0]}
          type="date"
          id="date"
          name="date"
          /* onChange={(event) => setDate(event.target.value)} */
          placeholder="dd.mm.yy"
          required
        />
        <label htmlFor="start">From: </label>
        <input
          defaultValue={selectedEntry.start}
          id="start"
          name="start"
          placeholder="Enter your start"
          pattern="^[A-Za-z]+$"
          title="Special characters and single numbers are not allowed"
          required
        />
        <label htmlFor="destination">To: </label>
        <input
          defaultValue={selectedEntry.destination}
          id="destination"
          name="destination"
          placeholder="Enter your destination"
          pattern="^[A-Za-z]+$"
          title="Special characters and single numbers are not allowed"
          required
        />
        <label htmlFor="km">Km: </label>
        <input
          defaultValue={selectedEntry.km}
          onChange={handleKm}
          id="km"
          name="km"
          placeholder="Enter the length of your journey"
          pattern="^\d+(,\d+)?(\.\d+)?$"
          title="Only single or decimal numbers are allowed"
          required
        />
        <label htmlFor="transport">
          Transport:
          <select
            defaultValue={selectedEntry.transport}
            name="transport"
            id="transport"
            onChange={handleDropdownChange}
          >
            <option value="Select a transport">
              {" "}
              -- Select a transport --{" "}
            </option>
            {transports.map((transport) => (
              <option key={transport.value} value={transport.value}>
                {transport.label}
              </option>
            ))}
          </select>
          {transport === "car" ? (
            <>
              <label htmlFor="fuel"></label>
              <select
                defaultValue={selectedEntry.fuel}
                name="fuel"
                id="fuel"
                onChange={handleDropdownChangeFuel}
              >
                <option value="Select a car"> -- Select a car -- </option>
                {cars.map((car) => (
                  <option key={car.value} value={car.value}>
                    {car.label}
                  </option>
                ))}
              </select>
            </>
          ) : null}
        </label>
        <SaveButton type="submit">Save</SaveButton>
        <CancelButton type="submit" onClick={handleBackToList}>
          {" "}
          Cancel{" "}
        </CancelButton>
      </Form>
      {/* <button
          type="button"
          onClick={() => setResult(handleCalculateCo2(transport, km, fuel))}
        >
          Calculate your impact
        </button>
      <p>
        Your journey has emitted {result} kg CO<sub>2</sub>
      </p> */}
    </>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SaveButton = styled.button`
  padding-inline: 20px;
  padding-block: 10px;
`;

const CancelButton = styled.button`
  padding-inline: 20px;
  padding-block: 10px;
`;
