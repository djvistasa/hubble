import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";

import { fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import InputField from ".";

describe("InputField", () => {
  const mockOnChange = vi.fn();
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(<InputField name="test" type="text" />);
    expect(component).toMatchSnapshot();
  });

  it("should call onChange when changed", () => {
    const { getByTestId } = mountWithTheme(
      <InputField
        name="test"
        type="text"
        onChange={mockOnChange}
        testID="input-test-test"
      />
    );
    const input = getByTestId("input-test-test");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
