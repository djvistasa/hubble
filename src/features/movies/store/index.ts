import { create } from "zustand";
import { IUseMoviesStore } from "./types";

export const useMoviesStore = create<IUseMoviesStore>((set) => ({
  movies: [],
  filteredMovies: undefined,
  setMovies: (movies) => set(() => ({ movies })),
  setFilteredMovies: (filteredMovies) => set(() => ({ filteredMovies })),
  resetMovies: () => set((state) => ({ filteredMovies: state.movies })),
}));
