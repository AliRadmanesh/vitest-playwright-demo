import { render, screen } from "@testing-library/react";
import { Greeting } from "./greeting";

describe("Greeting", () => {
  it("greets a user by name", () => {
    render(<Greeting name="Ali" />);
    expect(screen.getByText("Hello, Ali!")).toBeInTheDocument();
  });

  it("greets a Guest when the name is not provided", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, Guest!")).toBeInTheDocument();
  });
});
