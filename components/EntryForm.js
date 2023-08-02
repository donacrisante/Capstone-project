import styled from "styled-components";
import WrappedDatePicker from "./WrappedDatePicker";
import { useState } from "react";

export default function EntryForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [transport, setTransport] = useState("Select a transport");
  const [car, setCar] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    console.log(data);
  }

  const handleDropdownChange = (event) => {
    setTransport(event.target.value);
  };

  const handleDropdownChangeCar = (event) => {
    setCar(event.target.value);
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
  ]

 /*  let secondSelectBoxItems = null;

  if (transport === "car") {
    secondSelectBoxItems = cars;
  } else {
    secondSelectBoxItems = null;
  } */

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
            {car && <select onChange={handleDropdownChange}>
              <option value="Select a car"> -- Select a car -- </option>
              {cars.map((car) => (<option key={car.value} value={car.value}>{car.label}</option>))}
            </select>}
          </label>
          <Button type="submit">Add journey</Button>
        </Form>
      </section>
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
