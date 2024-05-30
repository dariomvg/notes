import { useState } from "react";
import { useContextNotes } from "../contexts/ContextNotes";
import ContainerBackground from "./ContainerBackground";
import Tools from "./Tools";
import "../styles/CardNote.css";

const CardNote = ({ note }) => {
  const [viewColors, setViewColors] = useState(false);
  const { id, title, text, date, hours, back } = note;
  const { setEditNote, showModal, addBackground, removeNote } =
    useContextNotes();

  const editNote = () => {
    setEditNote(note);
    showModal();
  };

  const showColors = () => setViewColors(!viewColors);

  const handleBackground = (back) => addBackground(back, id);

  const deleteNote = () => removeNote(id);

  return (
    <div
      className="card-note"
      style={
        back.color
          ? { backgroundColor: back.color }
          : { backgroundImage: `url(/${back.img})` }
      }>
      <div className="header-card">
        <div className="container-date">
          <p>última edición:</p>
          <p>{hours}</p>
        </div>
        <p>{date}</p>
      </div>
      <h2 className="title-card">{title}</h2>
      <p className="details-card">{text}</p>
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
