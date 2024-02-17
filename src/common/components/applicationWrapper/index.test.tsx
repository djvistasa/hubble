import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import ApplicationWrapper from ".";

describe("ApplicationWrapper", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(
      <ApplicationWrapper>
        <></>
      </ApplicationWrapper>
    );

    expect(component).toMatchSnapshot();
  });

  it("should render children", () => {
    const { getByTestId } = mountWithTheme(
      <ApplicationWrapper>
        <div data-testid="child">Test</div>
      </ApplicationWrapper>
    );

    const component = getByTestId("child");

    expect(component).toBeDefined();
  });
});
