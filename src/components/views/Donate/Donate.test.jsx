
import { render, screen } from "@testing-library/react";
import { Donate } from "./Donate";

describe("Renderizado en Donate", () => {
  it("renderizado h1 correctamente", () => {
    render(<Donate />)
    expect(
      screen.getByRole("heading", {
        name: "Colaborá con el proyecto",
        level: 1,
      })
    ).toBeInTheDocument()
  })

  it("renderizado un a", () => {
    render(<Donate />)
    expect(screen.getByRole("link")).toHaveAttribute("href")
  })
})
