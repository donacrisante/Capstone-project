import EntryList from "@/components/EntryList";

export default function JourneyList({
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
  allEntriesCount,
  favouriteEntriesCount,
  result,
  id,
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
      result={result}
      id={id}
      onToggleFavourite={onToggleFavourite}
    />
  );
}
