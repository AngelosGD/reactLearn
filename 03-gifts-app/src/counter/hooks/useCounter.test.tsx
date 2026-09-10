import { renderHook, act } from "@testing-library/react";
import { describe, expect, test, } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should initialize with default value of 10", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
  });

  test("should initialize with value 20", () => {
    const initialValue = 20;
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(20);
  });

  test("should increment counter when handleAdd is called", () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.handleAdd();
    });

    // si se desea cambiar su estado de nuevo
    // ! Envolver dentro de otro act (actualization)

    expect(result.current.counter).toBe(11)
  });

  // ? prueba para el de disminuir
  test('should substract counter when handleSub is called', () =>{
    const {result} = renderHook(() => useCounter())

    act(() =>{
      result.current.handleSubtract()
    })

    expect(result.current.counter).toBe(9)
  })

  // ? test para resetear al initialValue
  test('should reset to initialValue', () =>{
    const {result} = renderHook(() =>useCounter())
    const initialValue = 10
    act(() =>{
      result.current.handleReset()
    })

    expect(result.current.counter).toBe(initialValue)
  })
});
