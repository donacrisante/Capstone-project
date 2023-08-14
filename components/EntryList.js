import styled from "styled-components";
/* import { Fragment } from "react"; */
import Tab from "./Tab";
import useLocalStorageState from "use-local-storage-state";

export default function EntryList({ 
entries,
  filter,
  allEntriesCount,
  onShowAllEntries,
}) {
  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: "all",
  });

  function handleShowAllEntries() {
    setFilter("all");
  };

  return (
    <>
      <h2>Journey</h2>
      <Tab onClick={onShowAllEntries} isActive={filter === "all"}>
        Recent journeys{" "}
        <badge isActive={filter === "all"}>{allEntriesCount}</badge>
      </Tab>
      <EntryList 
      entries={entries}
      filter={filter}
      allEntriesCount={entries.length}
      onShowAllEntries={handleShowAllEntries}
        /* {entries.map((entry) => (
          <Fragment>{index > 0 ? <Divider /> : null}</Fragment>
        ))} */
        >
      </EntryList>
      <button type="submit"> + </button>
    </>
  );
}

const Divider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: color-water-10;
`;
