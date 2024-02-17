import { calculateRem } from "@utils";
import styled from "styled-components/macro";
import { IStyledInputProps } from "./types";

const StyledInput = styled.input<IStyledInputProps>`
  height: ${calculateRem(45)};
  border-radius: ${calculateRem(4)};
  border: 1px solid
    ${({
      theme: {
        colors: { border },
      },
    }) => border};
  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  padding: ${calculateRem(8)} ${calculateRem(12)};
  width: 100%;
  font-family: ${({ theme: { fonts } }) => fonts.poppins};
  outline: none;
  padding-left: ${({ hasIcon }) =>
    hasIcon ? calculateRem(40) : calculateRem(8)};
`;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInputLabel = styled.label`
  display: block;
  margin-bottom: ${calculateRem(8)};
  font-size: ${calculateRem(14)};
  font-weight: 700;
  font-family: ${({ theme: { fonts } }) => fonts.poppins};
`;

const StyledInputInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    left: ${calculateRem(10)};
  }
`;

export { StyledInput, StyledInputInner, StyledInputLabel, StyledInputWrapper };
