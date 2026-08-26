import {  afterEach, describe, expect, test, vi } from "vitest";
import { FirstSteps } from "./FirstSteps";
import { render, screen } from "@testing-library/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((_props: unknown) => {
  return <div data-testid="ItemCounter" />;
});

vi.mock("./shopping-cart/ItemCounter", () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props),
}));

// vi.mock("./shopping-cart/ItemCounter", () => ({
//   ItemCounter: (props: unknown) => (
//     <div
//       data-testid="ItemCounter"
//       name={props.name}
//       quantity={props.quantity}
//     />
//   ),
// }));

describe("First steps", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("shoud match snapshot", () => {
    const { container } = render(<FirstSteps />);

    expect(container).toMatchSnapshot();
  });

  test("should render the correct number of ItemCounter componets", () => {
    render(<FirstSteps />);

    const itemCounters = screen.getAllByTestId("ItemCounter");

    expect(itemCounters.length).toBe(3);

    screen.debug();
  });

  test("should render item counter with correc props", () => {
    render(<FirstSteps />);

    expect(mockItemCounter).toHaveBeenCalledTimes(3);
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "Nintendo swtich2xdd",
      quantity: 10,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "exbos",
      quantity: 0,
    });
    expect(mockItemCounter).toHaveBeenCalledWith({
      name: "diyin light 3 :000",
      quantity: 2,
    });
  });
});
