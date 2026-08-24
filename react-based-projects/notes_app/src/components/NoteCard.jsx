function NoteCard({ note, deleteNote }) {
  return (
    <div>
      <h3>{note.title}</h3>

      <p>{note.content}</p>

      <button onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteCard;