import { calculateRem } from "@utils";
import styled from "styled-components/macro";
import { IStyledApplicationWrapperProps } from "./types";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledApplicationWrapper = styled.div<IStyledApplicationWrapperProps>`
  padding: ${({ hasPadding }) => (hasPadding ? calculateRem(50) : 0)};
  height: calc(100vh - ${calculateRem(57)});
  margin: auto;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : calculateRem(1200))};
  padding-top: ${calculateRem(90)};
`;

export { StyledApplicationWrapper };
