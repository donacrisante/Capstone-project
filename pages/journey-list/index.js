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
  selectedEntry,
  setSelectedEntry,
  onHandleEdit,
  onHandleDelete,
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
      selectedEntry={selectedEntry}
      setSelectedEntry={setSelectedEntry}
      onHandleEdit={onHandleEdit}
      onHandleDelete={onHandleDelete}
    />
  );
}
