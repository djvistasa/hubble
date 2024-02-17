import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it, vi } from "vitest";

import { moviesResp } from "@features/movies/hooks/useMovies/mocks";
import MovieCard from ".";

describe("MovieCard", () => {
  const mountWithTheme = useTestComponentWithTheme();
  const mockOnClick = vi.fn();
  const mockMovie = moviesResp.results[0];

  it("should render correctly", () => {
    const component = mountWithTheme(
      <MovieCard movie={mockMovie} onMovieClick={mockOnClick} />
    );
    expect(component).toMatchSnapshot();
  });

  it("should call onMovieClick when clicked", () => {
    const { getByTestId } = mountWithTheme(
      <MovieCard
        movie={mockMovie}
        onMovieClick={mockOnClick}
        testID="movie-card"
      />
    );
    const movieCard = getByTestId("movie-card");
    movieCard.click();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
