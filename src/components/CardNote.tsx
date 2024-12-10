import { ChangeEvent, useEffect, useState } from "react";
import { useContextNotes } from "../contexts/ContextNotes";
import ContainerBackground from "./ContainerBackground.js";
import Tools from "./Tools.js";
import "../styles/CardNote.css";
import { ColorType, NoteType} from "../types/types";

const CardNote = ({ note }: NoteType): JSX.Element => {
  const [viewColors, setViewColors] = useState(false);
  const { id, title, text, date, hours, back } = note;
  const { addBackground, removeNote, updateNote } =
    useContextNotes();

    const editNote = () => {
      updateNote(note)
    }

  const showColors = () => setViewColors(!viewColors);
  const handleBackground = (back: ColorType) => addBackground(back, id);
  const deleteNote = () => removeNote(id);

  return (
    <div
      className="card-note"
      style={back.color ? { backgroundColor: back.color } : undefined}
      
      >
      <div className="header-card">
        <div className="container-date" data-testid="hours">
          <p>última edición:</p>
          <p>{hours}</p>
        </div>
        <p data-testid="date">{date}</p>
      </div>
      <h2 className="title-card" data-testid="title">{title}</h2>
      <p className="details-card" data-testid="text">{text}</p>
      {viewColors && (
        <ContainerBackground handleBackground={handleBackground} />
      )}
      <Tools
        deleteNote={deleteNote}
        editNote={editNote}
        showColors={showColors}
      />
    </div>
  );
};

export default CardNote;
