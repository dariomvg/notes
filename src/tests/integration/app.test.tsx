import { describe, expect, it, vi, Mock } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { useContextNotes } from "../../contexts/ContextNotes";
import App from "../../App";

vi.mock("../../contexts/ContextNotes", async () => {
  const actual = await vi.importActual("../../contexts/ContextNotes");
  return {
    ...actual,
    useContextNotes: vi.fn(),
  };
});

describe("Vista de App al inicio", () => {
  it("Se muestra formulario para crear", async () => {
    (useContextNotes as Mock).mockReturnValue({ notes: [], toggle: true });
    render(<App />);
    const title = screen.getByRole("textbox", { name: "Título" });
    const text = screen.getByRole("textbox", { name: "Nota" });
    const button = screen.getByRole("button", { name: "Crear" });

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("se muestra buttonCreate por que no hay notas",async  () => {
    (useContextNotes as Mock).mockReturnValue({
      notes: [],
      toggle: false,
    });

    render(<App />);

    await waitFor(() => {
        const button = screen.queryByRole("button", { name: /crear/i });
    expect(button).toBeInTheDocument(); 
    })
   
  });

  it("se muestra sectionCards por que hay notas", async () => {
    (useContextNotes as Mock).mockReturnValue({
      notes: [
        {
          id: 0,
          title: "react",
          text: "programming",
          date: "Apr 19",
          hours: "13:56",
          back: { color: "" },
        },
      ],
      toggle: false,
    });
    render(<App />);

    await waitFor(() => {
        expect(screen.getByTestId("wrapper")).toHaveTextContent("última edición:13:56");
    expect(screen.getByTestId("wrapper")).toHaveTextContent("Apr 19");
    expect(screen.getByTestId("wrapper")).toHaveTextContent("react");
    expect(screen.getByTestId("wrapper")).toHaveTextContent("programming");    
    })

  });
});
