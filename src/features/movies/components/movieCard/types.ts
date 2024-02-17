import { IMovie } from "@features/movies/types";

type IMovieCardProps = {
  movie: IMovie;
  onMovieClick: () => void;
  testID?: string;
};

type IStyledMovieCard = {
  backgroundImage: string;
};

export type { IMovieCardProps, IStyledMovieCard };
