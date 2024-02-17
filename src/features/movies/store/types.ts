import { IMovie } from "../types";

export type IUseMoviesStore = {
  movies: IMovie[];
  filteredMovies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  setFilteredMovies: (movies: IMovie[]) => void;
  resetMovies: () => void;
};
