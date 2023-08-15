import EntryList from "@/components/EntryList";

export default function JourneyList(){
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const entries = JSON.parse(localStorage.getItem("entries"));
  console.log("entries: ", entries);
  return (
    <EntryList
      entries={entries}
    />
    )
  }
  
    
}

// export default function JourneyList({ entries, filter, onShowAllEntries }) {
//   return (
//     <EntryList
//       entries={entries}
//       filter={filter}
//       onShowAllEntries={onShowAllEntries}
//     />
//   );
// }
