import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  it('renders "Hello <name>" when name is provided', () => {
    render(<Greet name="Laurie" />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/laurie/i);
  });

  it("renders login button when name is not provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
