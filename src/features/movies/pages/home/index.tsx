/**
 *
 * Home
 *
 */

import MoviesList from "@features/movies/components/moviesList";
import { moviesResp } from "@features/movies/hooks/useMovies/mocks";
import { StyledApplicationWrapper } from "@globalStyles";

function Home(): JSX.Element {
  return (
    <StyledApplicationWrapper>
      <MoviesList movies={moviesResp.results} onMovieClick={() => {}} />
    </StyledApplicationWrapper>
  );
}

export default Home;
