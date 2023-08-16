import Divider from "./Divider";
import { Fragment } from "react";
import useLocalStorageState from "use-local-storage-state";
import Tab from "./Tab";

export default function EntryList({ entries, filter, onShowAllEntries }) {

  return (

    <>
      <h2>Journeys</h2>
      <Tab onClick={onShowAllEntries} isActive={filter === "all"} >
        Recent journeys{" "}
         <badge isActive={filter === "all"}>{entries.length}</badge> 
      </Tab> 
      <section>
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <p>Date: {entry.date}</p>
            <p>From: {entry.start}</p>
            <p>To: {entry.destination}</p>
            <p>Km: {entry.km}</p>
            <p>Transport: {entry.transport}, {entry.fuel}</p>
          </Fragment>
        ))}
      </section> 
      <button type="submit"> + </button>
    </>
  )
};


