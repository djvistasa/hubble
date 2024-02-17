import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import ProtectedRoute from ".";

describe("PieChart", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(
      <ProtectedRoute>
        <div></div>
      </ProtectedRoute>
    );
    expect(component).toMatchSnapshot();
  });
});
