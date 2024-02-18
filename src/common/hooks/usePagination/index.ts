import { IMoviesRouteParams } from "@features/movies/hooks/useMovies/types";
import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { IUsePaginationReturnValues } from "./types";

function usePagination(): IUsePaginationReturnValues {
  const { page = 1 } = useParams<IMoviesRouteParams>();
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();

  const [showNextButton, setsShowNextButton] = useState<boolean>(false);

  const navigate = useNavigate();

  const getNextDataSet = () => {
    const currentSet = pathname.split("/")[1];

    navigate(`/${currentSet}/${Number(page) + 1}${search}`);
  };

  const getPreviousDataSet = () => {
    const currentSet = pathname.split("/")[1];

    navigate(`/${currentSet}/${Number(page) - 1}${search}`);
  };

  useEffect(() => {
    const totalPages = searchParams.get("total_pages");

    if (totalPages) {
      const totalPagesNumber = Number(totalPages);

      setsShowNextButton(Number(page) < totalPagesNumber);
    }
  }, [page, searchParams]);

  return {
    getNextDataSet,
    getPreviousDataSet,
    showNextButton,
    showPreviousButton: Number(page) > 1,
  };
}

export default usePagination;
