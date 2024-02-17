import { IMovie } from "@features/movies/types";

type IMoviesListProps = {
  movies: IMovie[];
  onMovieClick: (movie: IMovie) => void;
};

export type { IMoviesListProps };
