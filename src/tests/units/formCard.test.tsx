import { describe, expect, it, vi, Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import  { useContextNotes } from "../../contexts/ContextNotes";
import FormCard from "../../components/FormCard";
import userEvent from "@testing-library/user-event";

vi.mock("../../contexts/ContextNotes", async () => {
  const actual = await vi.importActual("../../contexts/ContextNotes");

  return {
    ...actual,
    useContextNotes: vi.fn(),
  };
});

describe("Manejo de datos en formCard", () => {
  it("ingreso de datos a los inputs para crear", async () => {
    const addNotes = vi.fn();
    const showModal = vi.fn();
    (useContextNotes as Mock).mockReturnValue({ addNotes, showModal });

    render(<FormCard />);

    const title = screen.getByRole("textbox", { name: "Título" });
    const text = screen.getByRole("textbox", { name: "Nota" });
    const button = screen.getByRole("button", { name: "Crear" });

    await userEvent.type(title, "react");
    await userEvent.type(text, "programming");

    expect(title).toHaveValue("react");
    expect(text).toHaveValue("programming");

    await userEvent.click(button);

    expect(addNotes).toHaveBeenCalledWith({
      id: 0,
      title: "react",
      text: "programming",
      date: "",
      hours: "",
      back: { color: "" },
    });

    expect(title).toHaveValue("");
    expect(text).toHaveValue("");
  });

  it("ingreso de datos a los inputs para actualizar", async () => {
    const addNotes = vi.fn();
    const showModal = vi.fn();
    (useContextNotes as Mock).mockReturnValue({
      addNotes,
      showModal,
      editNote: {
        id: 1,
        title: "react",
        text: "programming",
        date: "",
        hours: "",
        back: { color: "" },
      },
    });

    render(<FormCard />);

    const title = screen.getByRole("textbox", { name: "Título" });
    const text = screen.getByRole("textbox", { name: "Nota" });
    const button = screen.getByRole("button", { name: "Actualizar" });

    await userEvent.type(title, " 2");
    await userEvent.type(text, " 2");

    expect(title).toHaveValue("react 2");
    expect(text).toHaveValue("programming 2");

    await userEvent.click(button);

    expect(addNotes).toHaveBeenCalledWith({
      id: 1,
      title: "react 2",
      text: "programming 2",
      date: "",
      hours: "",
      back: { color: "" },
    });

    expect(title).toHaveValue("");
    expect(text).toHaveValue("");
  });
});
