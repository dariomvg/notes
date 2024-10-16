import "./App.css";
import FormCard from "./components/FormCard";
import { useContextNotes } from "./contexts/ContextNotes";
import Loading from "./components/Loading.js";
import React, { Suspense } from "react";
import Header from "./components/Header.js";
const SectionCards = React.lazy(() => import('./components/SectionCards.js'));
const ButtonCreate = React.lazy(() => import('./components/ButtonCreate.js'));

export default function App() {
  const { notes, toggle } = useContextNotes();

  return (
    <main className="wrapper">
      <Header />
      {toggle && (
        <div className="modal">
          <FormCard />
        </div>
      )}
      <section className="container-main">
        <section className="wrapper-main">
          <Suspense fallback={<Loading />}>
            {notes.length > 0 ? (
              <SectionCards notes={notes} />
            ) : (
              <ButtonCreate />
            )}
          </Suspense>
        </section>
      </section>
    </main>
  );
}
