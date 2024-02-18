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
    disableNextButton,
    disablePreviousButton,
  } = usePagination();
  return (
    <StyledPagination>
      <Button
        title="Previous"
        onClick={getPreviousDataSet}
        disabled={!disablePreviousButton}
      />
      <Button
        title="Next"
        onClick={getNextDataSet}
        disabled={!disableNextButton}
      />
    </StyledPagination>
  );
}

export default Pagination;
