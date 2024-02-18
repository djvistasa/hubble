/**
 *
 * Home
 *
 */

import ApplicationWrapper from "@components/applicationWrapper";
import NoResultsFound from "@components/noResultsFound";
import MoviesList from "@features/movies/components/moviesList";
import useMovies from "@features/movies/hooks/useMovies";
import { useMoviesStore } from "@features/movies/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(): JSX.Element {
  const { getMovies } = useMovies();
  const { filteredMovies: movies } = useMoviesStore();

  const navigate = useNavigate();

  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ApplicationWrapper>
      {movies?.length === 0 ? (
        <NoResultsFound />
      ) : (
        <MoviesList
          movies={movies || []}
          onMovieClick={(movieId: number) => navigate(`/movie/${movieId}`)}
        />
      )}
    </ApplicationWrapper>
  );
}

export default Home;
