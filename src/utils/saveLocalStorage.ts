
export const setLocalStorageNotes = (nota: Record<string, any | null>): void => {
  localStorage.setItem("notes", JSON.stringify(nota));
};

export const getLocalStorageNotes = (): string | null => {
  const dataLocal = localStorage.getItem("notes");
  return dataLocal;
};

