/**
 *
 * Pagination
 *
 */

import Button from "@components/button";
import usePagination from "@hooks/usePagination";
import { StyledPagination } from "./styles";
import { IPaginationProps } from "./types";

function Pagination(_props: IPaginationProps): JSX.Element {
  const {
    getNextDataSet,
    getPreviousDataSet,
    showNextButton,
    showPreviousButton,
  } = usePagination();
  return (
    <StyledPagination>
      <Button
        title="Previous"
        onClick={getPreviousDataSet}
        disabled={!showPreviousButton}
      />
      <Button
        title="Next"
        onClick={getNextDataSet}
        disabled={!showNextButton}
      />
    </StyledPagination>
  );
}

export default Pagination;
