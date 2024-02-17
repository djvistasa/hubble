import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";

import { RenderResult } from "@testing-library/react";

import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function useTestComponentWithTheme() {
  const renderWithTheme = (component: ReactElement<any, any>): RenderResult => {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </QueryClientProvider>
    );
  };

  return renderWithTheme;
}

export default useTestComponentWithTheme;
