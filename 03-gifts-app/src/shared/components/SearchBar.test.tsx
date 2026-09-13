import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("search bar", () => {
  test("should render searchbar correctly", () => {
    const { container } = render(<SearchBar onHandleSearch={() => {}} />);

    expect(container).toMatchSnapshot();

    expect(screen.getByRole("textbox")).toBeDefined();
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("should could on query with the correct value (700ms)", async () => {
    const onQuery = vi.fn()
    render(<SearchBar onHandleSearch={onQuery} />);
    
    const input = screen.getByRole('textbox')

    fireEvent.change(input, {target: {value: 'test'}})

    await waitFor(() =>{
      expect(onQuery).toHaveBeenCalledWith('test')
      expect(onQuery).toHaveBeenCalled()
      
    })
    
  });
});
