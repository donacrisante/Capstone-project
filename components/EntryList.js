import styled from "styled-components";
import { Fragment, useState } from "react";
import Tab from "./Tab";
import Tabs from "./Tabs";

export default function EntryList({ filter, allEntriesCount, onShowAllEntries }) {
    const [entries, setEntries] = useState([]);

    return (
        <>
        <h2>Journey</h2>
        <Tabs>
            <Tab onClick={onShowAllEntries} isActive={filter === "all"}>Recent journeys{" "}
            <badge isActive={filter === "all"}>{allEntriesCount}</badge>
            </Tab>
        </Tabs>
        <section>{entries.map((entry) => (
            <Fragment>
                {index > 0 ? <Divider /> : null}
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