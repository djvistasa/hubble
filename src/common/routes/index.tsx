import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "@components/protectedRoute";
import MoviesHome from "@features/movies/pages/home";

const routes = createBrowserRouter([
  // {
  //   path: "/auth",
  //   element: <Authentication />,
  // },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MoviesHome />
      </ProtectedRoute>
    ),
  },
]);

export default routes;

// eyJhbGciOiJIUzI1NiJ9
//   .eyJhdWQiOiJkYzQ3MDM3ZTk1ZmM1MGE1Yzg2N2U1ZGE0ODM5ZjZjOCIsInN1YiI6IjY1Y2ZmNWY2NzcwNzAwMDE4NzlhNTBlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
//   .ZiOyAIqX757A69GT3oSV_DmQTZi59QrvUV8yagyP9vE;
