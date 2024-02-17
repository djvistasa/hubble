import { calculateRem } from "@utils";
import styled from "styled-components/macro";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledBackButton = styled.a`
  display: flex;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.black80};
  display: flex;
  padding: 10px;

  position: absolute;
  top: -${calculateRem(380)};
  svg {
    margin-right: ${calculateRem(10)};

    path {
      fill: ${({ theme: { colors } }) => colors.white};
    }
  }
  > p {
    margin: 0 !important;
    color: ${({ theme: { colors } }) => colors.white};
    font-size: ${calculateRem(24)};
    font-weight: 500;
  }
`;

export { StyledBackButton };
