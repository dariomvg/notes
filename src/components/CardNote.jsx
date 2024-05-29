
import { useState } from "react";
import { useContextNotes } from "../contexts/ContextNotes";
import { deleteImageCloud } from "../services/deleteImage";
import ContainerBackground from "./ContainerBackground";
import ContainerFormImages from "./ContainerFormImages";
import Tools from "./Tools";
import "../styles/CardNote.css";

const CardNote = ({ note }) => {
  const [viewColors, setViewColors] = useState(false);
  const [formImage, setFormImage] = useState(false);
  const { id, title, text, date, hours, images, back } = note;
  const { removeNote, setEditNote, showModal, addBackground } =
    useContextNotes();

  const deleteNote = async () => {
    if (images.length > 0) {
      await deleteImageCloud(images);
    }
    removeNote(id);
  };

  const editNote = () => {
    setEditNote(note);
    showModal();
  };

  const showColors = () => {
    setViewColors(!viewColors);
  };
  const showFormImage = () => {
    setFormImage(!formImage);
  };

  const handleBackground = (back) => {
    addBackground(back, id);
  };

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
      <p className="details-card">
        {images.length > 0 &&
          images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt="your image"
              width={"100%"}
              height={180}
              priority="true"
              loading="lazy"
              className="image-detail"
            />
          ))}
        {text}
      </p>
      {viewColors && (
        <ContainerBackground handleBackground={handleBackground} />
      )}
      {formImage && (
        <ContainerFormImages
          id={id}
          setFormImage={setFormImage}
          formImage={formImage}
        />
      )}
      <Tools
        deleteNote={deleteNote}
        editNote={editNote}
        showColors={showColors}
        showFormImage={showFormImage}
      />
    </div>
  );
};

export default CardNote;
