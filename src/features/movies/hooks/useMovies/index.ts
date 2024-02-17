import { useMoviesStore } from "@features/movies/store";
import { IMovieResponse } from "@features/movies/types";
import { makeApiRequest } from "@utils";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IMoviesRouteParams, IUseMoviesReturnValues } from "./types";

function useMovies(): IUseMoviesReturnValues {
  const { page } = useParams<IMoviesRouteParams>();
  const [_searchParams, setSearchParams] = useSearchParams();
  const { setMovies, setFilteredMovies } = useMoviesStore();

  const [enableMoviesQuery, setEnableMoviesQuery] = useState(false);

  const getMovies = () => setEnableMoviesQuery(true);

  const navigation = useNavigate();

  const getNextPage = () => {
    if (page) {
      const activePage = parseInt(page);
      navigation(`/movies/${activePage + 1}`);
    }
  };

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

  useQuery(
    ["movies"],
    async () => {
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
    },
    {
      enabled: enableMoviesQuery,
    }
  );

  return { getNextPage, searchForMovie, getMovies };
}

export default useMovies;
