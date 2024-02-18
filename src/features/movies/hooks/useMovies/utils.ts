import { useMoviesStore } from "@features/movies/store";
import { IMovieResponse } from "@features/movies/types";
import { makeApiRequest } from "@utils";
import { SetURLSearchParams } from "react-router-dom";

const getPaginatedMoviesData = async (
  page: number,
  setSearchParams: SetURLSearchParams
) => {
  const { error, result, ok } = await makeApiRequest(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
  );

  if (error) {
    // handle error
    return [];
  }

  if (result && ok) {
    const { results, total_pages } = result as IMovieResponse;

    setSearchParams({
      total_pages: total_pages.toString(),
    });

    useMoviesStore.setState({ movies: results });
    useMoviesStore.setState({ filteredMovies: results });
  }
};

export { getPaginatedMoviesData };
