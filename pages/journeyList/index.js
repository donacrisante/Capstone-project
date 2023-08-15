import EntryList from "@/components/EntryList";

export default function JourneyList({ entries, filter, onShowAllEntries }) {
  return (
    <EntryList
      entries={entries}
      filter={filter}
      onShowAllEntries={onShowAllEntries}
    />
  );
}
