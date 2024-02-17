import useTestComponentWithTheme from "@hooks/useTestComponentWithTheme";
import { describe, expect, it } from "vitest";

import { movieDetailsResp } from "@features/movies/hooks/useMovies/mocks";
import MovieDetails from ".";

describe("MovieDetails", () => {
  const mountWithTheme = useTestComponentWithTheme();

  it("should render correctly", () => {
    const component = mountWithTheme(
      <MovieDetails movieDetails={movieDetailsResp} />
    );
    expect(component).toMatchSnapshot();
  });
});
