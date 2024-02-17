/**
 *
 * MovieDetails
 *
 */

import BackButton from "@components/backButton";
import { StyledFlexWrapper } from "@globalStyles";
import { formatCurrency, getMoviePosterPath } from "@utils";
import {
  StyledBackdrop,
  StyledLabel,
  StyledMovieDetails,
  StyledMovieDetailsBody,
  StyledMoviePoster,
  StyledValue,
} from "./styles";
import { IMovieDetailsProps } from "./types";

function MovieDetails({
  movieDetails: {
    backdrop_path,
    poster_path,
    title,
    release_date,
    genres,
    runtime,
    homepage,
    original_language,
    spoken_languages,
    revenue,
    budget,
    production_companies,
    production_countries,
    overview,
    tagline,
    vote_average,
    vote_count,
    popularity,
    imdb_id,
  },
}: IMovieDetailsProps): JSX.Element {
  return (
    <StyledMovieDetails>
      <StyledBackdrop
        backdropImage={
          backdrop_path ? getMoviePosterPath(backdrop_path, "original") : ""
        }
      />
      <StyledMovieDetailsBody>
        <BackButton />
        <StyledMoviePoster
          posterImage={getMoviePosterPath(poster_path, "original")}
        />

        <h1>{title}</h1>
        <StyledFlexWrapper>
          <StyledLabel>Released :</StyledLabel>
          <StyledValue>{release_date}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Genres :</StyledLabel>
          <StyledValue>
            {genres.map((genre) => genre.name).join(", ")}
          </StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Runtime :</StyledLabel>
          <StyledValue>{runtime} minutes</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Website :</StyledLabel>
          <StyledValue>
            <a href={homepage} target="_blank" rel="noreferrer">
              {homepage}
            </a>
          </StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Running time :</StyledLabel>
          <StyledValue>{runtime} minutes</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Original language :</StyledLabel>
          <StyledValue>{original_language}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Spoken languages :</StyledLabel>
          <StyledValue>
            {spoken_languages.map((language) => language.name).join(", ")}
          </StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Revenue :</StyledLabel>
          <StyledValue>{formatCurrency(revenue, "USD")}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Budget :</StyledLabel>
          <StyledValue>{formatCurrency(budget, "USD")}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Production companies :</StyledLabel>
          <StyledValue>
            {production_companies.map((company) => company.name).join(", ")}
          </StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Production countries :</StyledLabel>
          <StyledValue>
            {production_countries.map((company) => company.name).join(", ")}
          </StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Tagline :</StyledLabel>
          <StyledValue>{tagline}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Votes :</StyledLabel>
          <StyledValue>{vote_count}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Vote average :</StyledLabel>
          <StyledValue>{vote_average}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>Popularity :</StyledLabel>
          <StyledValue>{popularity}</StyledValue>
        </StyledFlexWrapper>
        <StyledFlexWrapper>
          <StyledLabel>IMDB link :</StyledLabel>
          <StyledValue>
            <a
              href={`https://www.imdb.com/title/${imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              https://www.imdb.com/title/{imdb_id}
            </a>
          </StyledValue>
        </StyledFlexWrapper>
        <h2>Overview</h2>
        <p>{overview}</p>
      </StyledMovieDetailsBody>
    </StyledMovieDetails>
  );
}

export default MovieDetails;
