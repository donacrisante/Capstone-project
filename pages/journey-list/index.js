import EntryList from "@/components/EntryList/EntryList";
import Heading from "@/components/Header/Header";

export default function JourneyList({
  header = "Journeys",
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
  allEntriesCount,
  favouriteEntriesCount,
  result,
  id,
  onToggleFavourite,
  onHandleEdit,
  onHandleDelete,
}) {

  return (
    <>
    <Heading>Journeys</Heading>
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
      onHandleEdit={onHandleEdit}
      onHandleDelete={onHandleDelete}
    />
    </>
  );
}

/* const Heading = styled.h1`
  text-align: center;
`; */
