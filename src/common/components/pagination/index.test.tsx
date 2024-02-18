import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it, vi } from "vitest";

import Pagination from '.';

describe("Pagination", () => {
  const mountWithTheme = useTestComponentWithTheme();
  const mockOnChange = vi.fn();

  it("should render correctly", () => {
    const component = mountWithTheme(
      <Pagination />
    );
    expect(component).toMatchSnapshot();
  });
});

