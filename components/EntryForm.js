import styled from "styled-components";
import WrappedDatePicker from "./WrappedDatePicker";
import { calculator } from "@/library/calculator";
import { useState } from "react";

export default function EntryForm({ formName, onSubmit }) {
  const [transport, setTransport] = useState("Select a transport");
  const [startDate, setStartDate] = useState(new Date());
  const [fuel, setFuel] = useState("");
  const [km, setKm] = useState(0);
  const [result, setResult] = useState(0);

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

  function handleCalculateCo2(transport, km, fuel) {
    const selectedTransport = transport === "car" ? fuel : transport;
    const kmNumber = parseFloat(km.replace(",", "."));
    if (!isNaN(kmNumber)) {
      return calculator[selectedTransport](kmNumber);
    }
    return 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);
    const transport = newEntry.transport;
    const km = newEntry.km;
    const fuel = newEntry.fuel;
    const result = handleCalculateCo2(transport, km, fuel);
    newEntry.result = result;
    event.target.reset();
    onSubmit(newEntry);
  }

  return (
    <>
      <h2>Calculator</h2>
      <section>
        <h3>Measure your impact</h3>
        <Form aria-labelledby={formName} onSubmit={handleSubmit}>
          <h3>Enter your journey: </h3>
          <label htmlFor="date">
            Date:
            <WrappedDatePicker
              id="date"
              name="date"
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd.MM.yyyy"
            />
          </label>
          <label htmlFor="start">From: </label>
          <input
            id="start"
            name="start"
            placeholder="Enter your start"
            pattern="^[A-Za-z]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <label htmlFor="destination">To: </label>
          <input
            id="destination"
            name="destination"
            placeholder="Enter your destination"
            pattern="^[A-Za-z]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <label htmlFor="km">Km: </label>
          <input
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
          <Button type="submit">Add journey</Button>
        </Form>
        <button
          type="button"
          onClick={() => setResult(handleCalculateCo2(transport, km, fuel))}
        >
          Calculate your impact
        </button>
      </section>
      <p>
        Your journey has emitted {result} kg CO<sub>2</sub>
      </p>
    </>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Button = styled.button`
  padding-inline: 20px;
  padding-block: 10px;
`;
