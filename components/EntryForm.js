import styled from "styled-components";
import WrappedDatePicker from "./WrappedDatePicker";
import { calculator } from "@/library/calculator";
import { useState } from "react";

export default function EntryForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [transport, setTransport] = useState("Select a transport");
  const [result, setResult] = useState(0);

  function handleCalculate(transport, km, fuel) {
    if ((transport === "Car") && (fuel === "Petrol")) {
      return calculator[0].petrol(km);
    } else if 
      ((transport === "Car") && (fuel === "Diesel")) {
        return calculator[1].diesel(km);
    } else if 
      ((transport === "Car") && (fuel === "Hybrid")) {
        return calculator[2].hybrid(km);
    } else if 
      ((transport === "Car") && (fuel === "Electric-Strommix")) {
        return calculator[3].electricStrommix(km);
    } else if 
      ((transport === "Car") && (fuel === "Electric-Renewable")) {
        return calculator[4].electricEco(km);
    } else if 
      (transport === "Plane") {
        return calculator[5].plane(km);
    } else if 
      (transport === "Train") {
        return calculator[6].train(km);
    } else if 
      (transport === "Bicycle") {
        return calculator[7].bicycle(km);
    } else {
      console.log("Please select a transport");
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    console.log(data);
    handleCalculate(car, plane, train, bicycle);
  };

  const handleDropdownChange = (event) => {
    setTransport(event.target.value);
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
          <input id="km" name="km" />
          <label htmlFor="transport">
            Transport:
            <select onChange={handleDropdownChange}>
              <option value="Select a transport"> -- Select a transport -- </option>
              {transports.map((transport) => (<option key={transport.value} value={transport.value}>{transport.label}</option>))}
            </select>
            {transport === "car" ? (
            <select>
              <option value="Select a car"> -- Select a car -- </option>
              {cars.map((car) => (<option key={car.value} value={car.value}>{car.label}</option>))}
            </select>) : null}
          </label>
          <Button type="submit">Add journey</Button>
        </Form>
          <button type="submit" onClick={() => console.log(handleCalculate("Car", 33, "Diesel"))}>Calculate your impact</button>
      </section>
      <p>{result}</p>
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
