
import {
  getLocalStorageNotes,
  setLocalStorageNotes,
} from "../services/saveLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

export const ContextNotes = createContext();

export const useContextNotes = () => {
  const context = useContext(ContextNotes);
  if (!context) {
    throw new Error("Su contexto no tiene el alcanze suficiente");
  }
  return context;
};

export default function ProviderNotes({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [editNote, setEditNote] = useState({});
  const [toggle, setToggle] = useState(false);

  const getInitialNotes = () => {
    const savedNotes = getLocalStorageNotes();
    return savedNotes !== null ? JSON.parse(savedNotes) : [];
  };

  const [notes, setNotes] = useState(getInitialNotes);

  const showModal = () => {
    setToggle(!toggle);
  };

  const addImagesLocal = (img, id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, images: [...note.images, img] } : note
      )
    );
  };

  const addNotes = (note) => {
    if (note.id) {
      setNotes(notes.map((item) => (item.id === note.id ? note : item)));
    } else {
      note.id = Date.now();
      setNotes([...notes, note]);
    }
  };

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const addFavorite = (favorite) => {
    setFavorites([...favorites, favorite]);
  };

  const addBackground = (background, id) => {
    setNotes(
      notes.map((note) =>
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
        addFavorite,
        editNote,
        setEditNote,
        showModal,
        toggle,
        addImagesLocal,
        addBackground,
      }}>
      {children}
    </ContextNotes.Provider>
  );
}
