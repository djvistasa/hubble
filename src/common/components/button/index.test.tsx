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

  it("should render with primary variant", () => {
    const { getByTestId } = mountWithTheme(
      <Button
        onClick={mockOnClick}
        title="hello"
        variant="primary"
        testID="Button.test"
      />
    );
    const component = getByTestId("Button.test");
    const style = window.getComputedStyle(component);
    expect(style.backgroundColor).toBe("#F7A823");
    expect(style.color).toBe("#fff");
    expect(style.borderColor).toBe("#FF8931");
  });

  it("should render with secondary variant", () => {
    const { getByTestId } = mountWithTheme(
      <Button
        onClick={mockOnClick}
        title="hello"
        variant="secondary"
        testID="Button.test"
      />
    );
    const component = getByTestId("Button.test");
    const style = window.getComputedStyle(component);
    expect(style.backgroundColor).toBe("#fff");
    expect(style.color).toBe("#19222B");
    expect(style.borderColor).toBe("#C2C6CC");
  });

  it("should render with tertiary variant", () => {
    const { getByTestId } = mountWithTheme(
      <Button
        onClick={mockOnClick}
        title="hello"
        variant="tertiary"
        testID="Button.test"
      />
    );
    const component = getByTestId("Button.test");
    const style = window.getComputedStyle(component);
    expect(style.backgroundColor).toBe("transparent");
    expect(style.color).toBe("#F7A823");
    expect(style.borderColor).toBe("#F7A823");
  });
});
