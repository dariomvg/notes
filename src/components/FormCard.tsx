import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "../styles/Form-card.css";
import { useContextNotes } from "../contexts/ContextNotes";
import iconClose from "../assets/icons/close.svg";
import { objNote } from "../constants/ObjectNote";
import { ObjNoteType } from "../types/types";

const FormCard = (): JSX.Element => {
  const [form, setform] = useState<ObjNoteType>(objNote);
  const { addNotes, editNote, showModal } = useContextNotes();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNotes(form);
    setform(objNote);
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
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="container-input">
        <label className="label-form">Nota</label>
        <input
          name="text"
          value={form.text}
          required
          onChange={handleChange}
          className="input detail-form"></input>
      </div>
      <button type="submit" className="btn-form">
        {form.id ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default FormCard;
