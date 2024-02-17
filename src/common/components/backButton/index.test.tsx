import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import BackButton from ".";

describe("BackButton", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(<BackButton />);
    expect(component).toMatchSnapshot();
  });
});
