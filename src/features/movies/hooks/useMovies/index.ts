import { IMovieResponse } from "@features/movies/types";
import { makeApiRequest } from "@utils";
import { useQuery } from "react-query";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { IMoviesRouteParams, IUseMovies } from "./types";

function useMovies(): IUseMovies {
  // create a getMovies mutation

  const { page } = useParams<IMoviesRouteParams>();
  const [searchParams, setSearchParams] = useSearchParams();

  const navigation = useNavigate();

  console.log(searchParams);

  const getNextPage = () => {
    if (page) {
      const activePage = parseInt(page);
      navigation(`/movies/${activePage + 1}`);
    }
  };

  const { data: movies } = useQuery(["movies"], async () => {
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

      return results;
    }
  });

  return { movies, getNextPage };
}

export default useMovies;
