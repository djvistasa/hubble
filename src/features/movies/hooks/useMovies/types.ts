import { UseMutationResult } from "react-query";

type IUseMoviesReturnValues = {
  getNextPage: () => void;
  searchForMovie: UseMutationResult<
    never[] | undefined,
    unknown,
    string,
    unknown
  >;
  getMovies: () => void;
};

type IMoviesProps = {};

type IMoviesRouteParams = {
  page: string;
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
