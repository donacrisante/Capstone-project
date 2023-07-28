export default function Form() {
    return (
        <>
        <header>Calculator</header>
        <form>
            <h1>Measure your impact</h1>
            <h2>Enter your journey: </h2>
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