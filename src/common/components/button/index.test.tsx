import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it, vi } from "vitest";
import Button from ".";

describe("Button", () => {
  const mountWithTheme = useTestComponentWithTheme();
  const mockOnClick = vi.fn();
  it("should render correctly", () => {
    const component = mountWithTheme(
      <Button onClick={mockOnClick} title="hello" />
    );
    expect(component).toMatchSnapshot();
  });

  it("should call onClick when clicked", () => {
    const { getByTestId } = mountWithTheme(
      <Button onClick={mockOnClick} title="hello" testID="Button.test" />
    );
    const button = getByTestId("Button.test");
    button.click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
