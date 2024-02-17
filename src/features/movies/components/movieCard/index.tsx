/**
 *
 * MovieCard
 *
 */

import { getMoviePosterPath } from "@utils";
import { StyledMask, StyledMovieCard, StyledMovieInfoWrapper } from "./styles";
import { IMovieCardProps } from "./types";

function MovieCard({
  movie: { backdrop_path, title },
  onMovieClick,
  testID,
}: IMovieCardProps): JSX.Element {
  return (
    <StyledMovieCard
      data-testid={testID || `movie-card-${title}`}
      onClick={onMovieClick}
      backgroundImage={getMoviePosterPath(backdrop_path, "w500")}
    >
      <StyledMask className="mask" />
      <StyledMovieInfoWrapper>{title}</StyledMovieInfoWrapper>
    </StyledMovieCard>
  );
}

export default MovieCard;
