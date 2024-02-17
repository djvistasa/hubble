/**
 *
 * Movie
 *
 */

import MovieDetails from "@features/movies/components/movieDetails";
import useMovies from "@features/movies/hooks/useMovies";
import { IMovieDetails } from "@features/movies/types";

function Movie(): JSX.Element {
  const { movieDetails } = useMovies();

  return (
    <>
      {movieDetails ? (
        <MovieDetails movieDetails={movieDetails as IMovieDetails} />
      ) : null}
    </>
  );
}

export default Movie;
