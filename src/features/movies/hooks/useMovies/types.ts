import { IMovie } from "@features/movies/types";

type IUseMovies = {
  movies: IMovie[] | undefined;
  getNextPage: () => void;
};

type IMoviesSearchParams = {
  page: string;
  total_pages: string;
  total_results: string;
};

export type { IMoviesSearchParams, IUseMovies };
