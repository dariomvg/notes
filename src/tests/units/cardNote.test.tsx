import { describe, expect, it, vi, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import ProviderNotes from "../../contexts/ContextNotes";
import CardNote from "../../components/CardNote";

describe("Vista de la nota particular", () => {
  it("las cards se renderizan", () => {
    const note = {
      id: 0,
      title: "react",
      text: "programming",
      date: "Apr 19",
      hours: "13:56",
      back: { color: "" },
    };

    render(
      <ProviderNotes>
        <CardNote note={note} />
      </ProviderNotes>
    );

    
    expect(screen.getByTestId("hours")).toHaveTextContent("última edición:13:56")
    expect(screen.getByTestId("date")).toHaveTextContent("Apr 19");
    expect(screen.getByTestId("title")).toHaveTextContent("react");
    expect(screen.getByTestId("text")).toHaveTextContent("programming");
  });
});
