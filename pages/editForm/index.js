import EntryForm from "@/components/EntryForm";

export default function EditForm({
  /* selectedEntry */ selectedEntry,
  setSelectedEntry,
  updatedEntry,
  setUpdatedEntry,
  /* setDate,
  handleKm,
  handleDropdownChange,
  handleDropdownChangeFuel, */

}) {

  function handleUpdateEntry() {
    // Update the entry in the entries array
    const updatedEntries = entries.map((entry) =>
      entry.id === selectedEntry.id ? updatedEntry : entry
    );

    // Clear the selected entry and updated data
    setSelectedEntry(null);
    setUpdatedEntry(null);

    // Update the entries in your state or wherever they are managed
    // Example: onEntriesUpdate(updatedEntries);
  }
  return (
    <>
      {selectedEntry && (
      <div>
        <h3>Edit your journey</h3>
        {/* <form>
          <label htmlFor="startDate">Start Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={(event) => setDate(event.target.value)}
            placeholder="dd.mm.yy"
            required
          />
          <label htmlFor="start">From: </label>
          <input
            id="start"
            name="start"
            placeholder="Enter your start"
            pattern="^[A-Za-z]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <label htmlFor="destination">To: </label>
          <input
            id="destination"
            name="destination"
            placeholder="Enter your destination"
            pattern="^[A-Za-z]+$"
            title="Special characters and single numbers are not allowed"
            required
          />
          <label htmlFor="km">Km: </label>
          <input
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
        </form> */}
        {/* Replace this with your edit form fields */}
        <input
            type="text"
            value={updatedEntry.start}
            onChange={(event) => setUpdatedEntry({ ...updatedEntry, start: event.target.value })}
          />
        {/* Add more input fields for other entry properties */}
        <button onClick={handleUpdateEntry}>Update</button>
      </div>
      )}
    </>
  );
}
