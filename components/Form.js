//import DatePicker from './DatePicker';
import  DatePicker  from 'react-datepicker';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
export default function Form() {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <>
        <h1 className="calculator-title">Calculator</h1>
        <section>
          <h2 className="section-title">Measure your impact</h2>
          <form>
            <h3 className="form-title">Enter your journey: </h3>
            <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
            {/* <label htmlFor="date">Date: </label>
            <input id="date" name="date"/> */}
            <label htmlFor="start">From: </label>
            <input id="start" name="start" />
            <label htmlFor="destination">To: </label>
            <input id="destination" name="destination" />
            <label htmlFor="km">Km: </label>
            <input id="km" name="km" />
            <label htmlFor="transport">Transport: </label>
            <input id="transport" name="transport" />
            <button type="submit">Add journey</button>
          </form>
        </section>
      </>
    );
  }


