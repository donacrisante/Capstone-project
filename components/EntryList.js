import Divider from "./Divider";
import { Fragment } from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Badge from "./Badge";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/router";
import { useState } from "react";

export default function EntryList({
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
  allEntriesCount,
  favouriteEntriesCount,
  onToggleFavourite,
}) {

  const [selectedEntry, setSelectedEntry] = useState(null); // State to track the selected entry for editing
  const [updatedEntry, setUpdatedEntry] = useState(null); // State to store the updated entry data

  const router = useRouter();

  function handleBackToForm() {
    router.back();
  }

  function handleEditEntry(entry) {
    // Set the selected entry for editing
    setSelectedEntry(entry);
    setUpdatedEntry({ ...entry }); // Initialize the form with the current data
    /* router.push("/editForm"); */
  }

  function handleUpdateEntry() {
    // Update the entry in the entries array
    const updatedEntries = entries.map((entry) =>
      entry.id === selectedEntry.id ? updatedEntry : entry
    );

    // Clear the selected entry and updated data
    setSelectedEntry(null);
    setUpdatedEntry(null);
  }

  return (
    <>
      <h2>Journeys</h2>
      <section name="journeys-section">
        <Tabs>
          <Tab onClick={onShowAllEntries} isActive={filter === "all"}>
            Recent journeys{" "}
            <Badge isActive={filter === "all"}>{allEntriesCount}</Badge>
          </Tab>
          <Tab
            onClick={onShowFavouriteEntries}
            isActive={filter === "favourites"}
          >
            Favourites{" "}
            <Badge isActive={filter === "favourites"}>
              {favouriteEntriesCount}
            </Badge>
          </Tab>
        </Tabs>
        <div name="journey-section__entries">
          {entries.map((entry, index) => (
            <Fragment key={entry.id}>
              {index > 0 ? <Divider /> : null}
              <FavouriteButton
                id={entry.id}
                isFavourite={entry.isFavourite}
                onToggleFavourite={onToggleFavourite}
              />
              <p>
                {entry.date}, {entry.start} - {entry.destination}, {entry.km}km,{" "}
                {entry.transport} {entry.fuel}, {entry.result} kg CO<sub>2</sub>
              </p>
              <button onClick={() => handleEditEntry(entry)}>Edit</button>
            </Fragment>
          ))}
        </div>
      </section>
      {selectedEntry && (
        <div>
          <h3>Edit Entry</h3>
          {/* Replace this with your edit form fields */}
          <input
            type="text"
            value={updatedEntry.start}
            onChange={(e) => setUpdatedEntry({ ...updatedEntry, start: e.target.value })}
          />
          <button onClick={handleUpdateEntry}>Update</button>
        </div>
      )}
      <button type="submit" onClick={handleBackToForm}>
        {" "}
        +{" "}
      </button>
    </>
  );
}
