import { createContext, useContext, useEffect, useState } from "react";
import {
  getLocalStorageNotes,
  setLocalStorageNotes,
} from "../utils/saveLocalStorage";
import {
  ChildrenType,
  ColorType,
  ContextNotesTypes,
  ObjNoteType,
} from "../types/types";
import { objNote } from "../constants/ObjectNote";
import { getDate } from "../utils/getDate";

export const ContextNotes = createContext<ContextNotesTypes | null>(null);

export const useContextNotes = (): ContextNotesTypes => {
  const context = useContext(ContextNotes);
  if (!context) {
    throw new Error("Su contexto no tiene el alcanze suficiente");
  }
  return context;
};

export default function ProviderNotes({ children }: ChildrenType) {
  const [editNote, setEditNote] = useState<ObjNoteType>(objNote);
  const [toggle, setToggle] = useState<boolean>(false);
  const [notes, setNotes] = useState<ObjNoteType[]>(() => {
    const savedNotes = getLocalStorageNotes();
    return savedNotes !== null ? JSON.parse(savedNotes) : [];
  });

  const showModal = () => {
    setToggle(!toggle);
  };

  const closeModal = () => {
    setEditNote(objNote); 
    showModal(); 
  }

  const addNotes = (note: ObjNoteType) => {
    const { fecha, hours } = getDate();
    const newNote = {...note, date: fecha, hours}

    if (note.id) {
      setNotes(
        notes.map((item: ObjNoteType) => (item.id === note.id ? note : item))
      );
      setEditNote(objNote);
    } else {
      newNote.id = Date.now();
      setNotes([...notes, newNote]);
    }
  };

  const removeNote = (id: number) => {
    setNotes(notes.filter((note: ObjNoteType) => note.id !== id));
  };

  const updateNote = (note: ObjNoteType) => {
    setEditNote(note);
    showModal();
  };

  const addBackground = (background: ColorType, id: number) => {
    setNotes(
      notes.map((note: ObjNoteType) =>
        note.id === id ? { ...note, back: background } : note
      )
    );
  };

  useEffect(() => {
    setLocalStorageNotes(notes);
  }, [notes]);

  return (
    <ContextNotes.Provider
      value={{
        notes,
        addNotes,
        removeNote,
        editNote,
        updateNote,
        showModal,
        toggle,
        addBackground,
        closeModal
      }}>
      {children}
    </ContextNotes.Provider>
  );
}
