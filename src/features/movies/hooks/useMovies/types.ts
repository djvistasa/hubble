import { IMovieDetails } from "@features/movies/types";
import { UseMutationResult } from "react-query";

type IUseMoviesReturnValues = {
  searchForMovie: UseMutationResult<
    never[] | undefined,
    unknown,
    string,
    unknown
  >;
  getMovies: () => void;
  movieDetails: IMovieDetails | undefined;
};

type IMoviesProps = {};

type IMoviesRouteParams = {
  page: string;
  movieId: string;
};

type ISearchParams = {
  total_pages: string;
};

export type {
  IMoviesProps,
  IMoviesRouteParams,
  ISearchParams,
  IUseMoviesReturnValues,
};
