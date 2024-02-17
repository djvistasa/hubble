import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import NavBar from ".";

describe("NavBar", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(<NavBar />);
    expect(component).toMatchSnapshot();
  });
});
