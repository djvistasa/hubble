import { IMovieResponse } from "@features/movies/types";
import { makeApiRequest } from "@utils";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { IUseMovies } from "./types";

function useMovies(): IUseMovies {
  // create a getMovies mutation
  const [_searchParams, setSearchParams] = useSearchParams();
  const [activePage, setActivePage] = useState(1);

  const getNextPage = () => {
    const nextPage = activePage + 1;
    setActivePage(nextPage);
  };

  const { data: movies } = useQuery(["movies"], async () => {
    const { error, result, ok } = await makeApiRequest(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${activePage}&sort_by=popularity.desc`
    );
    if (error) {
      // handle error
      return [];
    }

    if (result && ok) {
      const { page, results, total_pages, total_results } =
        result as IMovieResponse;

      setSearchParams({
        page: page.toString(),
        total_pages: total_pages.toString(),
        total_results: total_results.toString(),
      });
      return results;
    }
  });

  return { movies, getNextPage };
}

export default useMovies;
