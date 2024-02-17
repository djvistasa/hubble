import { calculateRem } from "@utils";
import styled from "styled-components/macro";
import { IStyledBackdropProps, IStyledMoviePosterProps } from "./types";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledMovieDetails = styled.div`
  width: 100%;
`;

const StyledBackdrop = styled.div<IStyledBackdropProps>`
  height: 400px;
  width: 100%;
  background-image: url(${({ backdropImage }) => backdropImage});
  background-size: cover;
  background-position: center;
  opacity: 0.5;
`;

const StyledMovieDetailsBody = styled.div`
  width: ${calculateRem(1200)};
  margin: 0 auto;
  position: relative;
  padding: ${calculateRem(20)};

  h1 {
    font-size: ${calculateRem(40)};
    margin-bottom: ${calculateRem(20)};
    max-width: ${calculateRem(860)};
  }

  h2 {
    font-size: ${calculateRem(24)};
    margin-top: ${calculateRem(20)};
  }

  p {
    font-size: ${calculateRem(16)};
    margin-bottom: ${calculateRem(10)};
    line-height: ${calculateRem(16)};
  }
`;

const StyledMoviePoster = styled.div<IStyledMoviePosterProps>`
  width: ${calculateRem(225)};
  height: ${calculateRem(225)};
  background-image: url(${({ posterImage }) => posterImage});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: ${calculateRem(20)};
  position: absolute;
  top: -150px;
  right: 0;
`;

const StyledValue = styled.p`
  margin-left: ${calculateRem(10)};
`;

const StyledLabel = styled.p`
  min-width: ${calculateRem(200)};
`;

export {
  StyledBackdrop,
  StyledLabel,
  StyledMovieDetails,
  StyledMovieDetailsBody,
  StyledMoviePoster,
  StyledValue,
};
