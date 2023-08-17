import EntryList from "@/components/EntryList";

export default function JourneyList({
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
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
      result={result}
      id={id}
      isFavourite={isFavourite}
      onToggleFavourite={onToggleFavourite}
    />
  );
}
