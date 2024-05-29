
import { createContext, useContext, useEffect, useState } from "react";

export const ContextTheme = createContext();

export const useContextTheme = () => {
  const context = useContext(ContextTheme);
  if (!context) {
    throw new Error("Su contexto no tiene el alcanze suficiente");
  }
  return context;
};

export default function ProviderTheme({ children }) {

  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? JSON.parse(savedTheme) : false;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  const handleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ContextTheme.Provider value={{ handleTheme, theme }}>
      {children}
    </ContextTheme.Provider>
  );
}
