import DatePicker from "./DatePicker"

export default function Form() {
    return (
        <>
        <h1>Calculator</h1>
        <form>
            <h2>Measure your impact</h2>
            <h3>Enter your journey: </h3>
            <DatePicker />
            <label htmlFor="date">Date: </label>
            <input id="date" name="date"/>
            <label htmlFor="start">From: </label>
            <input id="start" name="start"/>
            <label htmlFor="destination">To: </label>
            <input id="destination" name="destination"/>
            <label htmlFor="km">Km: </label>
            <input id="km" name="km"/>
            <label htmlFor="transport">Transport: </label>
            <input id="transport" name="transport"/>
            <button type="submit">Add journey</button>
        </form>
        </>
    )
}