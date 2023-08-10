import styled from "styled-components";
import WrappedDatePicker from "./WrappedDatePicker";
import { calculator } from "@/library/calculator";
import { useState } from "react";

export default function EntryForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [transport, setTransport] = useState("Select a transport");
  const [fuel, setFuel] = useState("");
  const [km, setKm] = useState(0);
  const [result, setResult] = useState(0);

  function handleCalculateCo2(transport, km, fuel) {
    const selectedTransport = transport === "car" ? fuel : transport;
    return calculator[selectedTransport](km);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    console.log(data);

    const { transport, km, fuel } = data;
  };

  function handleDropdownChange(event) {
    setTransport(event.target.value);
  };

  function handleDropdownChangeFuel(event) {
    setFuel(event.target.value);
  };

  function handleKm(event) {
    setKm(event.target.value);
  };

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
    { label: "Electric-Renewable", value: "electric-renewable" }
  ];

  return (
    <>
      <h2>Calculator</h2>
      <section>
        <h3>Measure your impact</h3>
        <Form onSubmit={handleFormSubmit}>
          <h3>Enter your journey: </h3>
          <label htmlFor="date">Date: </label>
          <WrappedDatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
          <label htmlFor="start">From: </label>
          <input id="start" name="start" />
          <label htmlFor="destination">To: </label>
          <input id="destination" name="destination" />
          <label htmlFor="km">Km: </label>
          <input onChange={handleKm} id="km" name="km" />
          <label htmlFor="transport">
            Transport:
            <select
              name="transport"
              id="transport"
              onChange={handleDropdownChange}
            >
              <option value="Select a transport"> -- Select a transport -- </option>
              {transports.map((transport) => (<option key={transport.value} value={transport.value}>{transport.label}</option>))}
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
              {cars.map((car) => (<option key={car.value} value={car.value}>{car.label}</option>))}
            </select>
            </>
            ) : null}
          </label>
          <Button type="submit">Add journey</Button>
        </Form>
          <button onClick={() => setResult(handleCalculateCo2(transport, km, fuel))}>Calculate your impact</button>
      </section>
      <p>Your journey has emitted {result} Kg CO<sub>2</sub></p>
    </>
  )};

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
