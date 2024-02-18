import { calculateRem } from "@utils";
import styled from "styled-components/macro";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledMoviesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${calculateRem(20)};
  padding-bottom: ${calculateRem(20)};
`;

const StyledPaginationWrapper = styled.div`
  padding-bottom: ${calculateRem(20)};
`;

export { StyledMoviesList, StyledPaginationWrapper };
