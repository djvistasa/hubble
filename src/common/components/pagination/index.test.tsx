import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import Pagination from ".";

describe("Pagination", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(<Pagination />);
    expect(component).toMatchSnapshot();
  });
});
