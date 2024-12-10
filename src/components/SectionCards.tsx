import "../styles/Section-cards.css"
import { SectionNotesProps } from "../types/types"
import CardNote from "./CardNote"

const SectionCards = ({notes}: SectionNotesProps): JSX.Element => {
  return (
    <section className="section-notes" data-testid="section-notes">
    {notes.map((note, index) => (
      <CardNote key={index} note={note} />
    ))}
  </section>
  )
}

export default SectionCards