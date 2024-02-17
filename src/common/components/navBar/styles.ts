import { calculateRem } from "@utils";
import styled from "styled-components/macro";

// NOTE: change yourElementType to your preferred type: e.g button
const StyledNavBar = styled.div`
  height: ${calculateRem(70)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${calculateRem(0)} ${calculateRem(4)} ${calculateRem(4)}
    ${calculateRem(0)} ${({ theme }) => theme.colors.black25};
  margin-bottom: ${calculateRem(25)};
  position: fixed;
  z-index: 100;
`;

const StyledNavBarInner = styled.div`
  height: 100%;
  width: ${calculateRem(1200)};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledSearchBarWrapper = styled.div`
  width: ${calculateRem(300)};
`;

const StyledAppName = styled.h1`
  font-size: ${calculateRem(24)};
  font-weight: 700;
`;

export {
  StyledNavBar,
  StyledNavBarInner,
  StyledSearchBarWrapper,
  StyledAppName,
};
