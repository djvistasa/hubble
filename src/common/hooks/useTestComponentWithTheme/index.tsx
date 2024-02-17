import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

import { RenderResult } from "@testing-library/react";

import { ReactElement } from "react";

function useTestComponentWithTheme() {
  const renderWithTheme = (component: ReactElement<any, any>): RenderResult => {
    return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
  };

  return renderWithTheme;
}

export default useTestComponentWithTheme;
