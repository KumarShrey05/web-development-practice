const noteInput = document.getElementById("note-content");
const addNoteButton = document.getElementById("add-note");
const NoteSection = document.querySelector(".note-section");

const noteModal = document.getElementById("note-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.getElementById("close-modal");
const deleteNote = document.getElementById("delete-note");

let selectedNote = null;
let selectedNoteId = null;
let notes = [];

// Create note
function createNote(note) {
  const newNote = document.createElement("div");

  newNote.className = "note";
  newNote.textContent = note.content;

  NoteSection.appendChild(newNote);

  newNote.addEventListener("click", () => {
    selectedNote = newNote;
    selectedNoteId = note.id;
    modalContent.textContent = note.content;
    noteModal.style.display = "flex";
  });
}

// Add new note
function addNote() {
  const noteContent = noteInput.value;

  if (noteContent.trim() === "") {
    alert("Can't make empty notes.");
    return;
  }

  const newNote = {
    id: Date.now(),
    content: noteContent,
  };

  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  createNote(newNote);

  noteInput.value = "";
  noteInput.focus();
}

// Display saved notes
function displayNotes() {
  notes.forEach((note) => {
    createNote(note);
  });
}

// Load notes from localStorage
const savedNotes = localStorage.getItem("notes");

if (savedNotes) {
  notes = JSON.parse(savedNotes);
  displayNotes();
}

// Close modal
closeModal.addEventListener("click", () => {
  noteModal.style.display = "none";
});

// Delete selected note
deleteNote.addEventListener("click", () => {
  if (!selectedNote) return;

  selectedNote.remove();

  notes = notes.filter((note) => note.id !== selectedNoteId);
  localStorage.setItem("notes", JSON.stringify(notes));

  selectedNote = null;
  selectedNoteId = null;
  noteModal.style.display = "none";
});

// Add button
addNoteButton.addEventListener("click", () => {
  addNote();
});
