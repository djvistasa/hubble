import { IMovie } from "@features/movies/types";

type IMoviesListProps = {
  movies: IMovie[];
  onMovieClick: (movieId: number) => void;
};

export type { IMoviesListProps };
