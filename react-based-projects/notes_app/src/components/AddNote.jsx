import { useState, useContext } from "react"
import { NotesContext } from "../context/NotesContext";

function AddNote() {

    const { addNote } = useContext(NotesContext);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleAddNote = () => {

        addNote(title, content);

        setTitle("");
        setContent("");
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
            />

            <textarea
                placeholder="Write You note..."
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
            />

            <button type="button" onClick={handleAddNote}>Add Note</button>
        </div>
    );
}

export default AddNote;