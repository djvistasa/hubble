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
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {
  const { getMovies } = useMovies();
  const { filteredMovies: movies } = useMoviesStore();

  const navigate = useNavigate();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ApplicationWrapper>
      <MoviesList
        movies={movies || []}
        onMovieClick={(movieId: number) => navigate(`/movie/${movieId}`)}
      />
    </ApplicationWrapper>
  );
}

export default Home;
