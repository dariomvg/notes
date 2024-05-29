
export const setLocalStorageNotes = (nota) => {
  localStorage.setItem("notes", JSON.stringify(nota));
};

export const getLocalStorageNotes = () => {
  const dataLocal = localStorage.getItem("notes");
  return dataLocal;
};

