// function NotesList({ notes }) {
//     return (
//         <div>
//             {notes.map((note) => (
//                 <div key={note.id}>
//                     <h3>{note.Title}</h3>
//                     <p>{note.Content}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default NotesList;


import NoteCard from "./NoteCard";

function NotesList({ notes, deleteNote }) {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NotesList;