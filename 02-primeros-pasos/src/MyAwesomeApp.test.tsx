import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
  test("should render firstNmae and lastname", () => {
    const { container } = render(<MyAwesomeApp />);
    screen.debug();
    // console.log(container);

    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("a");

    const h3 = container.querySelector("h3");
    expect(h3?.innerHTML).toContain("mejia");
  });

  test("should render firstNmae and lastname ----screen---", () => {
    const { container } = render(<MyAwesomeApp />);
    screen.debug();
    // console.log(container);

    const h1 = screen.getByTestId("firts-namee");

    expect(h1.innerHTML).toContain("an");
  });

  test("should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);

    expect(container).toMatchSnapshot();
  });

  test("should match snapshot with --screen xd...", () => {
    render(<MyAwesomeApp />);

    expect(screen.getByTestId("div-app")).toMatchSnapshot;
  });
});
