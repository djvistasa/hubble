/**
 *
 * Home
 *
 */

import ApplicationWrapper from "@components/applicationWrapper";
import MoviesList from "@features/movies/components/moviesList";
import useMovies from "@features/movies/hooks/useMovies";
import { useMoviesStore } from "@features/movies/store";
import { useEffect } from "react";

function Home(): JSX.Element {
  const { getMovies } = useMovies();
  const { filteredMovies: movies } = useMoviesStore();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ApplicationWrapper>
      <MoviesList movies={movies || []} onMovieClick={() => {}} />
    </ApplicationWrapper>
  );
}

export default Home;
