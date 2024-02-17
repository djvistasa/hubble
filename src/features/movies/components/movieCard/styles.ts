import { calculateRem } from "@utils";
import styled from "styled-components/macro";
import { IStyledMovieCard } from "./types";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledMovieCard = styled.a<IStyledMovieCard>`
  display: block;
  width: ${calculateRem(285)};
  height: ${calculateRem(300)};
  border-radius: ${calculateRem(10)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;

  &:hover {
    > p {
      bottom: 0;
    }

    .mask {
      opacity: 0;
    }
  }
`;

const StyledMovieInfoWrapper = styled.p`
  padding: ${calculateRem(10)};
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: -${calculateRem(50)};
  left: 0;
  width: 100%;
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;

export { StyledMask, StyledMovieCard, StyledMovieInfoWrapper };
