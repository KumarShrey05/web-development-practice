import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "./NoteCard";

function NotesList() {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NotesList;