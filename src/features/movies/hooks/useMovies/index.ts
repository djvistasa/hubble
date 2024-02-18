import { useMoviesStore } from "@features/movies/store";
import { IMovieDetails, IMovieResponse } from "@features/movies/types";
import { makeApiRequest } from "@utils";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { IMoviesRouteParams, IUseMoviesReturnValues } from "./types";

function useMovies(): IUseMoviesReturnValues {
  const { page, movieId } = useParams<IMoviesRouteParams>();
  const [_searchParams, setSearchParams] = useSearchParams();
  const { setMovies, setFilteredMovies } = useMoviesStore();

  const [enableMoviesQuery, setEnableMoviesQuery] = useState(false);
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | undefined>(
    undefined
  );

  const getMovies = () => setEnableMoviesQuery(true);

  const searchForMovie = useMutation(async (searchTerm: string) => {
    const { error, result, ok } = await makeApiRequest(
      `/search/movie?query=${searchTerm}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
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

      setFilteredMovies(results);
    }
  });

  const getPaginatedMoviesData = async (page: number) => {
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

      setMovies([...results]);
      setFilteredMovies([...results]);
    }
  };

  useQuery(["movies", page], async () => getPaginatedMoviesData(Number(page)), {
    enabled: enableMoviesQuery,
    keepPreviousData: true,
  });

  useQuery(
    ["movieDetails"],
    async () => {
      setMovieDetails(undefined);
      const { error, result, ok } = await makeApiRequest(`/movie/${movieId}`);

      if (error) {
        // handle error
        return null;
      }

      if (result && ok) {
        const details = result as IMovieDetails;

        return setMovieDetails(details);
      }
    },
    {
      enabled: !!movieId,
    }
  );

  return {
    searchForMovie,
    getMovies,
    movieDetails,
  };
}

export default useMovies;
