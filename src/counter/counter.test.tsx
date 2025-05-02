import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  it("renders with initial count", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });

  it("increments the counter", async () => {
    render(<Counter />);
    const button = screen.getByText("Increment");
    await userEvent.click(button);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });

  it("decrements the counter", async () => {
    render(<Counter />);
    const button = screen.getByText("Decrement");
    await userEvent.click(button);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
  });
});
