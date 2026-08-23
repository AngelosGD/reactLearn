import { describe, expect, test } from "vitest";
import { FirstSteps } from "./FirstSteps";
import { render } from "@testing-library/react";

describe("First steps", () => {
  test("shoud match snapshot", () => {
    const { container } = render(<FirstSteps />);

    expect(container).toMatchSnapshot();
  });
});
