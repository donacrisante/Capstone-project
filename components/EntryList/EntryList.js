import styled from "styled-components";
import Divider from "../Divider/Divider";
import { Fragment } from "react";
import Tab from "../Tab/Tab";
import Tabs from "../Tabs/Tabs";
import Badge from "../Badge/Badge";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import { useRouter } from "next/router";

export default function EntryList({
  entries,
  filter,
  onShowAllEntries,
  onShowFavouriteEntries,
  allEntriesCount,
  favouriteEntriesCount,
  onToggleFavourite,
  onHandleDelete,
}) {
  const router = useRouter();

  function handleBackToForm() {
    router.push("/calculator");
  }

  return (
    <>
      {/* <Background /> */}
      <section>
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
        <StyledEntryList>
          {entries.map((entry, index) => (
            <Fragment key={entry.id}>
              {index > 0 ? <Divider /> : null}
              <StyledEntry>
              <FavouriteButton
                id={entry.id}
                isFavourite={entry.isFavourite}
                onToggleFavourite={onToggleFavourite}
              />
              <StyledJourney>
                {new Date(entry.date)
                  .toLocaleDateString("en-GB")
                  .split("/")
                  .join(".")}
                , {entry.start} - {entry.destination}, {entry.km}km,{" "}
                {entry.transport} {entry.fuel}, {entry.result} kg CO<sub>2</sub>
              </StyledJourney>
              <button onClick={() => router.push(`/journey-list/${entry.id}`)}>
                <span role="img" aria-label="A pencil">
                  ✏️
                </span>
              </button>
              <button onClick={() => onHandleDelete(entry.id)}>
                <span role="img" aria-label="A trash can indicating deletion">
                  🗑️
                </span>
              </button>
              </StyledEntry>
            </Fragment>
          ))}
        </StyledEntryList>
      </section>
      <StyledAddButton type="submit" onClick={handleBackToForm}>
        {" "}
        +{" "}
      </StyledAddButton>
    </>
  );
}

/* const Background = styled.div`
  background-color: #5e8c61;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.7;
`; */

const StyledEntryList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: -10px;
  padding-inline-start: 0px;
`;

const StyledEntry = styled.li`
  margin: 0;
  padding: 30px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px; 
`;

const StyledJourney = styled.p`
  margin-block-start: 0em;
`

const StyledAddButton = styled.button`
  position: fixed;
  bottom: 100px; 
  right: 20px; 
  background-color: #5e8c61;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px; 
  height: 50px; 
  /* font-family: var(--font-family); */
  font-size: 40px; 
  font-weight: 700;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  cursor: pointer;
`;