
import iconDelete from "../assets/icons/delete.svg";
import iconUpdate from "../assets/icons/update.svg";
import iconColors from "../assets/icons/colors.svg";
import "../styles/Tools.css";
import { PropsTools } from "../types/types";

const Tools = ({ deleteNote, editNote, showColors }: PropsTools): JSX.Element => {
  return (
    <div className="container-tools">
      <img
        src={iconDelete}
        width={32}
        height={32}
        alt="icon delete"
        title="Eliminar nota"
        className="icon-tool"
        loading="lazy"
        onClick={deleteNote}
      />
      <img
        src={iconUpdate}
        width={32}
        height={32}
        alt="icon update"
        title="Modificar tarea"
        className="icon-tool"
        loading="lazy"
        onClick={editNote}
      />
      <img
        src={iconColors}
        width={32}
        height={32}
        alt="icon colors"
        title="Color de fondo"
        className="icon-tool"
        loading="lazy"
        onClick={showColors}
      />
    </div>
  );
};

export default Tools;
