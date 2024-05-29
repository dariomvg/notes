import "../styles/Section-cards.css"
import CardNote from "./CardNote"

const SectionCards = ({notes}) => {
  return (
    <section className="section-notes">
    {notes.map((note, index) => (
      <CardNote key={index} note={note} />
    ))}
  </section>
  )
}

export default SectionCards