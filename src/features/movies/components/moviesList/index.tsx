/**
 *
 * MoviesList
 *
 */

import MovieCard from "../movieCard";
import { StyledMoviesList } from "./styles";
import { IMoviesListProps } from "./types";

function MoviesList({ movies, onMovieClick }: IMoviesListProps): JSX.Element {
  return (
    <StyledMoviesList>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={() => onMovieClick(movie)}
        />
      ))}
    </StyledMoviesList>
  );
}

export default MoviesList;
