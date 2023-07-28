import { DayPicker } from 'react-day-picker';
import { useState } from 'react';

export default function DatePicker() {
  const [basicDate, setbasicDate] = useState(new Date());
  
  return (
    <DayPicker
      mode="single"
      basicDate={basicDate}
      onChange={(date) => setbasicDate(date)}
      dateFormat="MMMM d, yyyy"
    />
  );
}


/* return (
  <DayPicker
    mode="single"
    selected={selected}
    onSelect={setSelected}
  />
); */