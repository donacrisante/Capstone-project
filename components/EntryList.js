import styled from "styled-components";
import { Fragment } from "react";
import Tab from "./Tab";

export default function EntryList({ 
entries,
  filter,
  onShowAllEntries,
}) {

  return (
    <>
      <h2>Journey</h2>
      <Tab onClick={onShowAllEntries} isActive={filter === "all"}>
        Recent journeys{" "}
        <badge isActive={filter === "all"}>{entries.length}</badge>
      </Tab>
      <section>{entries.map((entry, index) => (
          <Fragment key={entry.id}>{index > 0 ? <Divider /> : null}</Fragment>
        ))}
      </section>
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
