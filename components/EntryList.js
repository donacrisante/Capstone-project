import Divider from "./Divider";
import { Fragment } from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";
import FavouriteButton from "./FavouriteButton";

export default function EntryList({
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
  allEntriesCount,
  favouriteEntriesCount,
  /* isFavouriteTabActiv */e,
  result,
  onToggleFavourite,
}) {
  
  /* const displayedEntries = isFavouriteTabActive ? favouriteEntries : entries; */

  return (
    <>
      <h2>Journeys</h2>
      <section name="journeys-section">
      <Tabs>
        <Tab onClick={onShowAllEntries} isActive={filter === "all"}>
          Recent journeys{" "}
          <badge isActive={filter === "all"}>{allEntriesCount}</badge>
        </Tab>
        <Tab
          onClick={onShowFavouriteEntries}
          isActive={filter === "favourites"}
        >
          Favourites{" "}
          <badge isActive={filter === "favourites"}>
            {favouriteEntriesCount}
          </badge>
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
            <p>{entry.date}, {entry.start} - {entry.destination}, {entry.km}km, {entry.transport} {entry.fuel}, {result} kg CO<sub>2</sub></p>
          </Fragment>
        ))}
      </div>
      </section>
      <button type="submit"> + </button>
    </>
  );
}
