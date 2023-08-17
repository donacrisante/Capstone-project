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
  result,
  id,
  isFavourite,
  onToggleFavourite
}) {

  const favouriteEntries = entries.filter((entry) => entry.isFavourite);

  return (
    <>
      <h2>Journeys</h2>
      <Tabs>
        <Tab onClick={onShowAllEntries} isActive={filter === "all"}>
          Recent journeys{" "}
          <badge isActive={filter === "all"}>{entries.length}</badge>
        </Tab>
        <Tab
          onClick={onShowFavouriteEntries}
          isActive={filter === "favourites"}
        >
          Favourites{" "}
          <badge isActive={filter === "favourites"}>
          {favouriteEntries.length}
          </badge>
        </Tab>
      </Tabs>
      <section>
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <FavouriteButton id={id} isFavourite={isFavourite} onToggleFavourite={onToggleFavourite} />
            <p>Date: {entry.date}</p>
            <p>From: {entry.start}</p>
            <p>To: {entry.destination}</p>
            <p>Km: {entry.km}</p>
            <p>
              Transport: {entry.transport} {entry.fuel}
            </p>
            <p>Impact: {result}</p>
          </Fragment>
        ))}
      </section>
      <button type="submit"> + </button>
    </>
  );
}
