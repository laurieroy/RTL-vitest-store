import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TermsAndConditions from "../../src/components/TermsAndConditions";
describe("TermsAndConditions", () => {
  it("renders with correct text and initial state", () => {
    render(<TermsAndConditions />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Terms & Conditions");

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const disabledBtn = screen.getByRole("button");

    expect(disabledBtn).toBeInTheDocument();
    // expect(disabledBtn).toHaveTextContent(/submit/i);
    expect(disabledBtn).toBeDisabled();
  });

  it("is enabled when the checkbox is checked", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(screen.getByRole("button")).toBeEnabled();
  });
});
