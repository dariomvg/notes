import "../styles/Header.css";
import ButtonCreate from "./ButtonCreate";
import { useContextNotes } from "../contexts/ContextNotes";

const Header = () => {
    const {notes} = useContextNotes()

  return (
    <header className="header">
      <nav className="navbar">
        {notes.length > 0 && <ButtonCreate />}
      </nav>
    </header>
  );
};

export default Header;
