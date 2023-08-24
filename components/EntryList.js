import Divider from "./Divider";
import { Fragment } from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";
import Badge from "./Badge";
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";

export default function EntryList({
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
  allEntriesCount,
  favouriteEntriesCount,
  onToggleFavourite,
  setSelectedEntry
}) {

  const [updatedEntry, setUpdatedEntry] = useLocalStorageState("updatedEntry", {
    defaultValue: [],
   }); // enregistre les données mises à jour

  const router = useRouter();

  function handleBackToForm() {
    router.back();
  }

  function handleEditEntry(entry) {
    setSelectedEntry(entry);
    setUpdatedEntry({ ...entry }); // initialise le formulaire avec les entrées à modifier
    router.push("journeyList/edit");
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
      <button type="submit" onClick={handleBackToForm}> + </button>
    </>
  );
}
