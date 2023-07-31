import styled from "styled-components";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function EntryForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("Car");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    event.target.reset();
    console.log(data);
  }

  return (
    <>
      <h1 className="calculator-title">Calculator</h1>
      <section>
        <h2 className="section-title">Measure your impact</h2>
        <Form onSubmit={handleFormSubmit}>
          <h3 className="form-title">Enter your journey: </h3>
          <label htmlFor="date">Date: </label>
          <DatePicker
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
            <select value={selectedOption} onChange={handleDropdownChange}>
              <option value="option1">Car</option>
              <option value="option2">Plane</option>
              <option value="option3">Train</option>
              <option value="option4">Bicycle</option>
            </select>
          </label>
          <Button type="submit" className="form__submit-button">
            Add journey
          </Button>
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

const Button = styled.button `
  padding-inline: 20px;
  padding-block: 10px;
  `;

