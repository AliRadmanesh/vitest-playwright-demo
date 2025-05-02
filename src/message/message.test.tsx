import { vi } from "vitest";
import * as service from "./messageService";
import { Message } from "./message";
import { render, screen } from "@testing-library/react";

vi.mock("./messageService");

describe("Message", () => {
  it("shows mocked message", () => {
    vi.spyOn(service, "getWelcomeMessage").mockReturnValue("Mocked Message!");
    render(<Message />);
    expect(screen.getByText("Mocked Message!")).toBeInTheDocument();
  });
});
