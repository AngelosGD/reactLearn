import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
// import { useCounter } from "../hooks/useCounter";

const handleAddMock = vi.fn()
const handleSubMock = vi.fn()
const handleResetMock = vi.fn()


vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 20,
    handleAdd: handleAddMock,
    handleSub: handleSubMock,
    handleReset: handleResetMock,
  }),
}));

describe("MyCounterApp", () => {
  test("should render the component", () => {
    render(<MyCounterApp />);

    // screen.debug()

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `counter: 20`,
    );

    expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "-1" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();
  });

  test("should call handleAdd if button pressed", () => {
    render(<MyCounterApp />);
    const button = screen.getByRole("button", { name: "+1" });

    fireEvent.click(button);

    expect(handleAddMock).toHaveBeenCalled()
    expect(handleSubMock).not.toHaveBeenCalled()
    expect(handleResetMock).not.toHaveBeenCalled()



  });
});
