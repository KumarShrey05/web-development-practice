import { createContext, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notes, setNotes] = useState([]);

    const addNote = (title, content) => {
        const newNote = {
            id: Date.now(),
            title,
            content,
        };

        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes((prevNotes) =>
            prevNotes.filter((note) => note.id !== id)
        )
    };

    const updateNote = (id, updatedNote) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === id ? { ...note, ...updatedNote } : note
            )
        );
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, setNotes, deleteNote, updateNote }}>
            {children}
        </NotesContext.Provider>
    );
}