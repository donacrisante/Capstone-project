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
              <StyledEntryBox>
              <FavouriteButton
                id={entry.id}
                isFavourite={entry.isFavourite}
                onToggleFavourite={onToggleFavourite}
              />
              <StyledEntry>
                {new Date(entry.date)
                  .toLocaleDateString("en-GB")
                  .split("/")
                  .join(".")}
                , {entry.start} - {entry.destination}, {entry.km}km,{" "}
                {entry.transport} {entry.fuel}, {entry.result} kg CO<sub>2</sub>
              </StyledEntry>
              <StyledButton onClick={() => router.push(`/journey-list/${entry.id}`)}>
                <span role="img" aria-label="A pencil">
                  ✏️
                </span>
              </StyledButton>
              <StyledButton onClick={() => onHandleDelete(entry.id)}>
                <span role="img" aria-label="A trash can indicating deletion">
                  🗑️
                </span>
              </StyledButton>
              </StyledEntryBox>
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

const StyledEntryList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: -10px;
  padding-inline-start: 0px;
`;

const StyledEntryBox = styled.li`
  margin: 0;
  padding: 30px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px; 
`;

const StyledEntry = styled.p`
  margin-block-start: 0em;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 20%;
  width: 50px; 
  height: 30px;
  background-color: #eed9c4;
`;

const StyledAddButton = styled.button`
  position: fixed;
  bottom: 70px; 
  right: 20px; 
  background-color: #5e8c61;
  color: #eed9c4;
  border: none;
  border-radius: 50%;
  width: 50px; 
  height: 50px; 
  font-size: 40px; 
  font-weight: lighter;
  box-shadow: #5E5DF0 0 10px 20px -10px;
  cursor: pointer;
`;