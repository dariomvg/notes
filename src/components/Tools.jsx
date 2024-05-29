
import iconDelete from "../assets/icons/delete.svg";
import iconUpdate from "../assets/icons/update.svg";
import iconImage from "../assets/icons/image.svg";
import iconColors from "../assets/icons/colors.svg";
import "../styles/Tools.css";

const Tools = ({ deleteNote, editNote, showColors, showFormImage }) => {
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
      <img
        src={iconImage}
        width={32}
        height={32}
        alt="icon img"
        title="imgn de fondo"
        className="icon-tool"
        loading="lazy"
        onClick={showFormImage}
      />
    </div>
  );
};

export default Tools;
