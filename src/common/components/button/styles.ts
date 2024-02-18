import { calculateRem } from "@utils";
import styled from "styled-components/macro";
import { IStyledButtonProps } from "./types";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledButton = styled.button<IStyledButtonProps>`
  border-radius: ${calculateRem(4)};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  padding: ${calculateRem(12)} ${calculateRem(16)};
  font-size: ${calculateRem(16)};
  font-weight: 700;
  min-width: 124px;
  cursor: pointer;
  font-family: ${({
    theme: {
      fonts: { poppins },
    },
  }) => poppins};
  display: flex;
  justify-content: center;

  :disabled {
    opacity: 0.5;
    background-color: ${({ theme }) => theme.colors.black25};
    border: 1px solid ${({ theme }) => theme.colors.black25};
    color: ${({ theme }) => theme.colors.body};
  }
`;

const StyledIconWrapper = styled.div`
  margin-right: ${calculateRem(13)};
`;

export { StyledButton, StyledIconWrapper };
