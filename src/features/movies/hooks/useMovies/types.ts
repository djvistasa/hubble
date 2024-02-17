import { IMovie } from "@features/movies/types";

type IUseMovies = {
  movies: IMovie[] | undefined;
  getNextPage: () => void;
};

type IMoviesRouteParams = {
  page: string;
};

type ISearchParams = {
  total_pages: string;
};

export type { IMoviesRouteParams, IUseMovies, ISearchParams };
