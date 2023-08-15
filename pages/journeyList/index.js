//import EntryList from "@/components/EntryList";
// import ls from 'local-storage'

export default function JourneyList(){
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const entries = localStorage.getItem("entries");
  console.log("entries: ", entries);
  }
  
  return <div>journeyList hier</div>
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
