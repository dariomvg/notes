import { describe, expect, it, vi, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import { useContextNotes } from "../../contexts/ContextNotes";
import Header from "../../components/Header";

vi.mock("../../contexts/ContextNotes", async () => {
  const actual = await vi.importActual("../../contexts/ContextNotes");
  return {
    ...actual,
    useContextNotes: vi.fn(),
  };
});

describe("Vista de boton de crear en header", () => {
  it("boton oculto cuando no hay notas", () => {
    (useContextNotes as Mock).mockReturnValue({ notes: [] });
    render(
      
        <Header />
      
    );

    const button = screen.queryByRole("button", { name: /crear/i });
    expect(button).not.toBeInTheDocument();
  });

  it("boton visto cuando hay notas agregadas", () => {
    (useContextNotes as Mock).mockReturnValue({
      notes: [{ id: 1, text: "Nota 1" }],
    });
    render(
      
        <Header />
      
    );

    const button = screen.queryByRole("button", { name: /crear/i });
    expect(button).toBeInTheDocument();
  });
});
