import { theme } from "@theme";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "@globalStyles";

import { QueryClient, QueryClientProvider } from "react-query";
import routes from "@routes";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
