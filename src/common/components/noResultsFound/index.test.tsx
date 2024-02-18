import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import NoResultsFound from ".";

describe("NoResultsFound", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(<NoResultsFound />);
    expect(component).toMatchSnapshot();
  });
});
