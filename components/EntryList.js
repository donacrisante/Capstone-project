import styled from "styled-components";
import { Fragment } from "react";
/* import Tab from "./Tab"; */

export default function EntryList({ entries, filter, onShowAllEntries }) {
    console.log(entries);
  return (

    <>
      <h2>Journey</h2>
      {/* <Tab onClick={onShowAllEntries} isActive={filter === "all"} >
        Recent journeys{" "}
         <badge isActive={filter === "all"}>{entries.length}</badge> 
      </Tab> */}
      <section>
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <p>Date: {entry.date}</p>
            <p>From: {entry.start}</p>
            <p>To: {entry.destination}</p>
            <p>Km: {entry.km}</p>
            <p>Transport: {entry.transport}</p>
          </Fragment>
        ))}
      </section> 
      <button type="submit"> + </button>
    </>
  )
};

const Divider = styled.hr`
  border: none;
  width: 100%;
  margin: 0;
  height: 1px;
  background: color-water-10;
`;
