type IMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type IMovieResponse = {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

type IGenre = {
  id: number;
  name: string;
};

type IProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type IProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type ISpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type IBelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type IMovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: IBelongsToCollection; // Define a proper type for collection or null
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type { IMovie, IMovieDetails, IMovieResponse };
