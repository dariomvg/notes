import "./App.css";
import FormCard from "./components/FormCard";
import { useContextNotes } from "./contexts/ContextNotes";
import Loading from "./components/Loading";
import { useContextTheme } from "./contexts/ContextTheme";
import React, { Suspense } from "react";
import Header from "./components/Header";
const SectionCards = React.lazy(() => import('./components/SectionCards'));
const ButtonCreate = React.lazy(() => import('./components/ButtonCreate'));

export default function App() {
  const { notes, toggle } = useContextNotes();
  const { theme } = useContextTheme();

  return (
    <main className="wrapper">
      <Header />
      {toggle && (
        <div className="modal">
          <FormCard />
        </div>
      )}
      <section className={`container-main ${theme ? "theme-light" : null}`}>
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
