import { Navigate, createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "@components/protectedRoute";
import MoviesHome from "@features/movies/pages/home";
import MovieDetails from "@features/movies/pages/movie";

const routes = createBrowserRouter([
  {
    path: "/movies/:page",
    element: (
      <ProtectedRoute>
        <MoviesHome />
      </ProtectedRoute>
    ),
  },
  {
    path: "/movie/:movieId",
    element: (
      <ProtectedRoute>
        <MovieDetails />
      </ProtectedRoute>
    ),
  },
  { path: "/", element: <Navigate to="/movies/1" replace /> },
]);

export default routes;
