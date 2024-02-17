import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it, vi } from "vitest";

import { moviesResp } from "@features/movies/hooks/useMovies/mocks";
import MoviesList from ".";

describe("MoviesList", () => {
  const mountWithTheme = useTestComponentWithTheme();
  const mockOnClick = vi.fn();

  const mockMovies = moviesResp.results;

  it("should render correctly", () => {
    const component = mountWithTheme(
      <MoviesList movies={mockMovies} onMovieClick={mockOnClick} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should call onMovieClick when clicked", () => {
    const { getByTestId } = mountWithTheme(
      <MoviesList movies={mockMovies} onMovieClick={mockOnClick} />
    );
    const moviesList = getByTestId("movie-card-Sixty Minutes");
    moviesList.click();
    expect(mockOnClick).toHaveBeenCalledWith(mockMovies[1]);
  });
});
