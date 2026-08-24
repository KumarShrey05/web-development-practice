// import { useState } from 'react'
// import AddNote from './Components/AddNote';
// import NotesList from './Components/NotesList';

// import './App.css'

// function App() {

//   const [notes, setNotes] = useState([]);

//   return (
//     <>
//       <h1>Notes App</h1>
//       <AddNote setNotes={setNotes}/>
//       <NotesList notes={notes}/>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import NotesPage from "./components/NotesPage";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React",
      content: "Learn Context API",
    },
    {
      id: 2,
      title: "JavaScript",
      content: "Practice daily",
    },
  ]);

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  return (
    <>
      <h1>Notes App</h1>

      <NotesPage
        notes={notes}
        deleteNote={deleteNote}
      />
    </>
  );
}

export default App;