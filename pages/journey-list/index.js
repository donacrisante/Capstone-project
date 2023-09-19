import EntryList from "@/components/EntryList/EntryList";
import Heading from "@/components/Header/Header";
import styled from "styled-components";

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
  onHandleEdit,
  onHandleDelete,
}) {
  return (
    <>
      <Heading>Journeys</Heading>
      <StyleDiv>
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
      </StyleDiv>
    </>
  );
}

const StyleDiv = styled.div`
  margin: 100px;
`;
