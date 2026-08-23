import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("should render with default values ", () => {
    const name = "Test item";
    render(<ItemCounter name={name}></ItemCounter>);

    // screen.debug();

    expect(screen.getByText(name)).toBeDefined();
    expect(screen.getByText(name)).not.toBeNull();
  });

  test("should render with custom quantity", () => {
    const nameCustomQuantiy = "custom quantity";
    const quantity = 5;

    render(<ItemCounter name={nameCustomQuantiy} quantity={quantity} />);

    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("should increase count when +1 is pressed", () => {
    const name = "test item";
    render(<ItemCounter name={name} quantity={1} />);

    const [buttonAdd] = screen.getAllByRole("button");

    fireEvent.click(buttonAdd);

    expect(screen.getByText("2")).toBeDefined();
  });

  test("should decrease count when -1 is pressend", () => {
    const name = "test item";
    const quantity = 5;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonSub] = screen.getAllByRole("button");

    fireEvent.click(buttonSub);

    expect(screen.getByText("4")).toBeDefined();
  });

  test("should not decrease count when -1 button is pressend and quantity 1", () => {
    const name = "test item";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const [, buttonSub] = screen.getAllByRole("button");

    fireEvent.click(buttonSub);

    expect(screen.getByText("1")).toBeDefined();
  });

  test("shpuld change to red when count its 1", () => {
    const name = "test item";
    const quantity = 1;

    render(<ItemCounter name={name} quantity={quantity} />);

    const itemText = screen.getByText(name);

    expect(itemText.style.color).toBe("black");
  });
});
