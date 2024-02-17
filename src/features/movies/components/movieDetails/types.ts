import { IMovieDetails } from "@features/movies/types";

type IMovieDetailsProps = {
  movieDetails: IMovieDetails;
};

type IStyledBackdropProps = {
  backdropImage: string;
};

type IStyledMoviePosterProps = {
  posterImage: string;
};

export type {
  IMovieDetailsProps,
  IStyledBackdropProps,
  IStyledMoviePosterProps,
};
