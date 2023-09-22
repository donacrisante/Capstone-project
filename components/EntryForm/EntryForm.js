import styled from "styled-components";
import { calculator } from "@/library/calculator";
import { useEffect, useState } from "react";

export default function EntryForm({
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

  function handleCalculateCo2(transport, km, fuel) {
    if (transport === "car" && !fuel) return 0;
    const selectedTransport = transport === "car" ? fuel : transport;
    const kmNumber = parseFloat(km.replace(",", "."));

    if (!isNaN(kmNumber)) {
      if (
        calculator[selectedTransport] &&
        typeof calculator[selectedTransport] === "function"
      ) {
        return calculator[selectedTransport](kmNumber);
      } else {
        console.error(
          `Calculator function for ${selectedTransport} does not exist.`
        );
        return 0;
      }
    }
    return 0;
  }

  useEffect(() => {
    const calculatedResult = handleCalculateCo2(transport, km, fuel);
    setResult(calculatedResult);
  }, [transport, km, fuel]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);

    newEntry.result = handleCalculateCo2(transport, km, fuel);
    newEntry.fuel = fuel === "Select a car" ? "" : fuel;
    newEntry.id = selectedEntry?.id;
    onSubmit(newEntry);
  }

  function handleDropdownChange(event) {
    setTransport(event.target.value);

    if (transport === "car") {
      setFuel("Select a car");
    } else {
      setFuel("");
    }
  }

  function handleDropdownChangeFuel(event) {
    setFuel(event.target.value);
  }

  function handleKm(event) {
    setKm(event.target.value);
  }

  return (
    <>
      <h3>{formTitle}</h3>
      <section>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="date">Date: </Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="dd.mm.yy"
            required
          />
          <Label htmlFor="start">From: </Label>
          <Input
            defaultValue={selectedEntry?.start || ""}
            id="start"
            name="start"
            placeholder="Enter your start"
            pattern="^[A-Za-z ]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <Label htmlFor="destination">To: </Label>
          <Input
            defaultValue={selectedEntry?.destination || ""}
            id="destination"
            name="destination"
            placeholder="Enter your destination"
            pattern="^[A-Za-z ]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <Label htmlFor="km">Km: </Label>
          <Input
            value={km}
            onChange={handleKm}
            id="km"
            name="km"
            placeholder="Enter the length of your journey"
            pattern="^\d+(,\d+)?(\.\d+)?$"
            title="Only single or decimal numbers are allowed"
            required
          />
          <Label htmlFor="transport">
            Transport:
            <Select
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
            </Select>
            {transport === "car" ? (
              <>
                <Label htmlFor="fuel"></Label>
                <Select
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
                </Select>
              </>
            ) : null}
          </Label>
          <Result>
            Your journey has emitted {result} kg CO<sub>2</sub>
          </Result>
            <Button type="submit">{buttonText}</Button>
        </Form>
      </section>
    </>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
`;

const Input = styled.input`
  padding: 5px;
  margin: 2px 0 15px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 15px;
  width: 100%;
  background: #cccccc;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25);
`;

const Select = styled.select`
  padding: 5px;
  margin: 5px 0 15px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 15px;
  width: 100%;
  background: #cccccc;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25);
`;

const Button = styled.button`
  justify-content: center;
  align-items: center;
  margin: 0px 0px 10px 40px;
  width: 150px;
  height: 30px;
  flex-shrink: 0;
  font-family: var(--font-family);
  font-size: 13px;
  font-weight: bold;
  border-radius: 50px;
  border-style: none;
  background: #5e8c61;
  box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25);
`;

const Result = styled.p`
  font-size: 14px;
`;
