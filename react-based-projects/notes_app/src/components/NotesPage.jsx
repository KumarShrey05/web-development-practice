import NotesList from "./NotesList";

function NotesPage({ notes, deleteNote }) {
  return (
    <NotesList
      notes={notes}
      deleteNote={deleteNote}
    />
  );
}

export default NotesPage;