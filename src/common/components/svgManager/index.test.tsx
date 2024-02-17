import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import SvgManager from ".";

describe("SvgManager", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(<SvgManager iconName="search" />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with testID", () => {
    const { getAllByTestId } = mountWithTheme(
      <SvgManager iconName="search" testID="svg-manager" />
    );

    const component = getAllByTestId("svg-manager");
    expect(component).toBeDefined();
  });

  it("should render correctly with svgProp", () => {
    const { getByTestId } = mountWithTheme(
      <SvgManager
        iconName="search"
        svgProp={{ width: 15, height: 13 }}
        testID="svg-search"
      />
    );

    const component = getByTestId("svg-search");
    expect(component).toHaveProperty("width", "15");
    expect(component).toHaveProperty("height", "13");
  });
});
