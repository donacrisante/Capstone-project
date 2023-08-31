import styled from "styled-components";
import { calculator } from "@/library/calculator";
import { useState } from "react";

export default function EntryForm({
  formName,
  formTitle = "Measure your impact",
  buttonText = "Add journey",
  onSubmit,
  selectedEntry,
}) {
  const [transport, setTransport] = useState(
    selectedEntry?.transport || "Select a transport"
  );
  const [date, setDate] = useState(selectedEntry?.date || new Date());
  const [fuel, setFuel] = useState(selectedEntry?.fuel || "");
  const [km, setKm] = useState(selectedEntry?.km ?? "");
  const [result, setResult] = useState(selectedEntry?.result ?? 0);

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

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);

    newEntry.result = handleCalculateCo2(
      newEntry.transport,
      newEntry.km,
      newEntry.fuel
    );

    newEntry.id = selectedEntry?.id;
    onSubmit(newEntry);
  }

  function handleDropdownChange(event) {
    setTransport(event.target.value);

    /* if (transport === "car") {
      setFuel("Select a car");
    } else {
      setFuel("");
    }

    const newTransport = event.target.value;
    setTransport(newTransport);
    const calculatedResult = handleCalculateCo2(newTransport, km, fuel);
    setResult(calculatedResult); */
  }

  function handleDropdownChangeFuel(event) {
    setFuel(event.target.value);

    /* const newFuel = event.target.value;
    setFuel(newFuel);
    const calculatedResult = handleCalculateCo2(transport, km, newFuel);
    setResult(calculatedResult); */
  }

  function handleKm(event) {
    setKm(event.target.value);

    /* const newKm = event.target.value;
    setKm(newKm);
    const calculatedResult = handleCalculateCo2(transport, newKm, fuel);
    setResult(calculatedResult); */
  }

  function handleCalculateCo2(transport, km, fuel) {
    const selectedTransport = transport === "car" ? fuel : transport;
    const kmNumber = parseFloat(km.replace(",", "."));
    if (!isNaN(kmNumber)) {
      return calculator[selectedTransport](kmNumber);
    }
    return 0;
  }
    /* if (transport === "car") {
      const selectedFuel = fuel;
      const kmNumber = parseFloat(km.replace(",", "."));
      if (!isNaN(kmNumber)) {
        return calculator[selectedFuel](kmNumber);
      }
    } else {
      const kmNumber = parseFloat(km.replace(",", "."));
      if (!isNaN(kmNumber)) {
        return calculator[transport](kmNumber);
      }
    }
    return 0;
  } */

  return (
    <>
      <h3>{formTitle}</h3>
      <section>
        <Form aria-labelledby={formName} onSubmit={handleSubmit}>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="dd.mm.yy"
            required
          />
          <label htmlFor="start">From: </label>
          <input
            defaultValue={selectedEntry?.start || ""}
            id="start"
            name="start"
            placeholder="Enter your start"
            pattern="^[A-Za-z]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <label htmlFor="destination">To: </label>
          <input
            defaultValue={selectedEntry?.destination || ""}
            id="destination"
            name="destination"
            placeholder="Enter your destination"
            pattern="^[A-Za-z]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <label htmlFor="km">Km: </label>
          <input
            value={km}
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
              value={transport}
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
                  value={fuel}
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
          <Button type="submit">{buttonText}</Button>
        </Form>
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