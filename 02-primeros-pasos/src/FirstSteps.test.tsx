import { describe, expect, test, vi } from "vitest";
import { FirstSteps } from "./FirstSteps";
import { render, screen } from "@testing-library/react";


vi.mock('./shopping-cart/ItemCounter', () =>({
  ItemCounter: () => <div data-testid="ItemCounter"></div>
}))

describe("First steps", () => {
  test("shoud match snapshot", () => {
    const { container } = render(<FirstSteps />);

    expect(container).toMatchSnapshot();
  });

  test('should render the correct number of ItemCounter componets', () =>{
    render(<FirstSteps/>)
    
    const itemCounters = screen.getAllByTestId('ItemCounter')

    expect(itemCounters.length).toBe(3)

    screen.debug()
    
  })
});
