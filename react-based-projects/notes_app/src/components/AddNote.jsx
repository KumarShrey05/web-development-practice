import { useState } from "react"

function AddNote({ setNotes }) {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const addNote = () => {
        const newNote = {
            id: Date.now(),
            title: title,
            content: content
        };

        setNotes((prevNotes) => [...prevNotes, newNote]);

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

            <button type="button" onClick={addNote}>Add Note</button>
        </div>
    );
}

export default AddNote;