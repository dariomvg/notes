import { ReactNode } from "react";

export interface ObjNoteType {
  id: number;
  title: string;
  text: string;
  date: string;
  hours: string;
  back: ColorType;
}

export interface ColorType {
  color: string;
}

export interface ContextNotesTypes {
  editNote: ObjNoteType;
  toggle: boolean;
  notes: ObjNoteType[];
  showModal: () => void;
  addNotes: (note: ObjNoteType) => void;
  removeNote: (id: number) => void;
  addBackground: (background: ColorType, id: number) => void;
  updateNote: (note: ObjNoteType) => void;
}

export interface ChildrenType {
  children: ReactNode;
}

export interface NoteType {
  note: ObjNoteType;
}

export interface PropsTools {
  deleteNote: () => void
  editNote: () => void
  showColors: () => void
}

export interface ContainerType {
    handleBackground: (item: ColorType) => void
}