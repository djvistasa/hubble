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
});
