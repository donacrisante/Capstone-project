import EntryList from "@/components/EntryList";

export default function JourneyList({
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
  allEntriesCount,
  favouriteEntriesCount,
  /* isFavouriteTabActive, */
  result,
  id,
  isFavourite,
  onToggleFavourite,
}) {

  

  return (
    <EntryList
      entries={entries}
      filter={filter}
      onShowAllEntries={onShowAllEntries}
      onShowFavouriteEntries={onShowFavouriteEntries}
      allEntriesCount={allEntriesCount}
      favouriteEntriesCount={favouriteEntriesCount}
      /* isFavouriteTabActive={isFavouriteTabActive} */
      result={result}
      id={id}
      isFavourite={isFavourite}
      onToggleFavourite={onToggleFavourite}
    />
  );
}
