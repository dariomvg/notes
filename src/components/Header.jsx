
import "../styles/Header.css";
import Toggle from "./Toggle";
import ButtonCreate from "./ButtonCreate";
import { useContextNotes } from "../contexts/ContextNotes";
import { useContextTheme } from "../contexts/ContextTheme";

const Header = () => {
    const {notes} = useContextNotes()
    const {theme, handleTheme} = useContextTheme();

  return (
    <header className="header">
      <nav className="navbar">
        <Toggle theme={theme} handleTheme={handleTheme} />
        {notes.length > 0 && <ButtonCreate />}
      </nav>
    </header>
  );
};

export default Header;
