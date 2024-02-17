import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import { calculateRem } from "@utils";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";
import reset from "styled-reset";
import {
  IStyledApplicationWrapperProps,
  IStyledFlexWrapperProps,
} from "../types";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;

  }
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${calculateRem(16)};
    line-height: 1.5;
    box-sizing: border-box;
    font-family: ${({
      theme: {
        fonts: { poppins },
      },
    }) => poppins};
    color: ${({
      theme: {
        colors: { text },
      },
    }) => text};
  }

  a {
    cursor: pointer;
    color: ${({
      theme: {
        colors: { text },
      },
    }) => text};

  }

  strong {
    font-family: ${({
      theme: {
        fonts: { poppins },
      },
    }) => poppins};
    font-weight: 600;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    display: grid;
    place-content: center;

    &:before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: ${({
        theme: {
          colors: { primary },
        },
      }) => `inset 1em 1em ${primary})`};
    }

    &:checked::before {
      transform: scale(1);
    }
  }

`;

const StyledApplicationWrapper = styled.div<IStyledApplicationWrapperProps>`
  padding: ${({ hasPadding }) => (hasPadding ? calculateRem(50) : 0)};
  height: calc(100vh - ${calculateRem(57)});
  margin: auto;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : calculateRem(1200))};
  padding-top: ${calculateRem(90)};
`;

const StyledErrorIndicator = styled.p`
  font-size: ${calculateRem(12)};
  bottom: -${calculateRem(21)};
  right: 0;
  position: absolute;
  color: ${({
    theme: {
      colors: { error },
    },
  }) => error};
`;

const StyledFlexWrapper = styled.div<IStyledFlexWrapperProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
`;

const StyledRegistrationFormWrapper = styled.div`
  width: 65%;
  height: 100vh;
  background-color: ${({
    theme: {
      colors: { tertiary },
    },
  }) => tertiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFormWrapper = styled.div`
  max-width: ${calculateRem(516)};
`;

const StyledFormFooterCopy = styled.p`
  font-size: ${calculateRem(16)};
`;

export {
  GlobalStyles,
  StyledApplicationWrapper,
  StyledErrorIndicator,
  StyledFlexWrapper,
  StyledFormFooterCopy,
  StyledFormWrapper,
  StyledRegistrationFormWrapper,
};
