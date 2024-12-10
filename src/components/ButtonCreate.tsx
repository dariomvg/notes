import "../styles/ButtonCreate.css"
import iconMas from "../assets/icons/mas-circle.svg"
import { useContextNotes } from "../contexts/ContextNotes"

const ButtonCreate = (): JSX.Element => {
  const {showModal} = useContextNotes()
  return (
    <button className="btn-create-note" onClick={showModal}>
      <img src={iconMas} alt="icon mas" width={30} height={30} className="icon-btn" />
      Crear Nota
    </button>
  )
}

export default ButtonCreate