/**
 *
 * MoviesList
 *
 */

import Pagination from "@components/pagination";
import MovieCard from "../movieCard";
import { StyledMoviesList, StyledPaginationWrapper } from "./styles";
import { IMoviesListProps } from "./types";

function MoviesList({ movies, onMovieClick }: IMoviesListProps): JSX.Element {
  return (
    <>
      <StyledMoviesList>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={() => onMovieClick(movie.id)}
          />
        ))}
      </StyledMoviesList>
      <StyledPaginationWrapper>
        <Pagination />
      </StyledPaginationWrapper>
    </>
  );
}

export default MoviesList;
