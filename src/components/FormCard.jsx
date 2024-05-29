
import { useEffect, useState } from "react";
import "../styles/Form-card.css";
import { getDate } from "../utils/getDate";
import { useContextNotes } from "../contexts/ContextNotes";
import iconClose from "../assets/icons/close.svg";
import { objNote } from "../constants/ObjectNote";

const FormCard = () => {
  const [form, setform] = useState(objNote);
  const { addNotes, editNote, setEditNote, showModal } = useContextNotes();

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { fecha, hours } = getDate();
    form.date = fecha;
    form.hours = hours;
    addNotes(form);
    setform(objNote);
    setEditNote({});
    showModal();
  };

  useEffect(() => {
    if (editNote.id !== undefined) {
      setform(editNote);
    }
  }, []);

  return (
    <form className="form" onSubmit={handleSubmitForm}>
      <div className="container-close">
        <img
          src={iconClose}
          width={40}
          height={40}
          alt="icon close"
          className="icon-close"
          onClick={showModal}
          loading="lazy"
        />
      </div>

      <div className="container-input">
        <label className="label-form">Título</label>
        <input
          type="text"
          name="title"
          value={form.title}
          required
          onChange={(e) => handleChange(e)}
          className="input"
        />
      </div>
      <div className="container-input">
        <label className="label-form">Nota</label>
        <textarea
          name="text"
          cols="30"
          rows="10"
          value={form.text}
          required
          onChange={(e) => handleChange(e)}
          className="input detail-form"></textarea>
      </div>
      <button type="submit" className="btn-form">
        {form.id ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default FormCard;
