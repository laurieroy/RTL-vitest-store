import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";
// import { User } from "@auth0/auth0-react";

describe("Admin User", () => {
  it("displays Edit button when user is admin", () => {
    const user: User = { id: 1, name: "Laurie", isAdmin: true }
    
    render(<UserAccount user={user} />);

    const editBtn = screen.getByRole("button");
    
    expect(editBtn).toBeInTheDocument();
    expect(editBtn).toHaveTextContent(/edit/i);
  });
});

describe("UserAccount", () => {
  it("displays user name", () => {
    const user: User = { id: 1, name: "Laurie" }

    render(<UserAccount user={user} />);
 
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("does not show Edit button for regular users", () => {
    const user: User = { id: 1, name: "Laurie" }
    render(<UserAccount user={user}/>);

    const editButton = screen.queryByRole("button");
    
    expect(editButton).not.toBeInTheDocument();
  });
});
