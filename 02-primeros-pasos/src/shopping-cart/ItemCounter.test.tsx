import { render, screen } from "@testing-library/react";
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
});
