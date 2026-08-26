import { describe, expect, test } from "vitest";
import { add, divide, multiply, sub } from "./math.helper";

describe("add", () => {
  test("should add <two positive numbers", () => {
    //! 1-arrange
    const a = 1;
    const b = 5;

    //!2-act
    const result = add(a, b);
    //! 2-asserts
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("deberia rstar 2 numeros positivos", () => {
    const a = 2;
    const b = 3;

    const result = sub(a, b);

    expect(result).toBe(a - b);
  });

  test("deberia rstar 2 numeros positivos", () => {
    const a = -2;
    const b = 3;

    const result = sub(a, b);

    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("deberia rstar 2 numeros positivos", () => {
    const a = 2;
    const b = 3;

    const result = multiply(a, b);
    console.log({ result });

    expect(result).toBe(a * b);
  });

  test("deberia rstar 2 numeros positivos", () => {
    const a = -6;
    const b = 4;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
  });
});

describe("divide", () => {
  test("deberia dividir 2 numeros positivos", () => {
    const a = 2;
    const b = 3;

    const result = divide(a, b);
    console.log({ result });

    expect(result).toBe(a / b);
  });

});
