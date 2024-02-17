import { Navigate, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "@components/protectedRoute";
import MoviesHome from "@features/movies/pages/home";

const routes = createBrowserRouter([
  {
    path: "/movies/:page",
    element: (
      <ProtectedRoute>
        <MoviesHome />
      </ProtectedRoute>
    ),
  },
  { path: "/", element: <Navigate to="/movies/1" replace /> },
]);

export default routes;
