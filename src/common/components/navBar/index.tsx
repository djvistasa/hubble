/**
 *
 * NavBar
 *
 */

import InputField from "@components/inputField";
import {
  StyledAppName,
  StyledNavBar,
  StyledNavBarInner,
  StyledSearchBarWrapper,
} from "./styles";
import { INavBarProps } from "./types";

function NavBar(_props: INavBarProps): JSX.Element {
  return (
    <StyledNavBar>
      <StyledNavBarInner>
        <StyledAppName>Hubble Movies</StyledAppName>

        <StyledSearchBarWrapper>
          <InputField
            icon="search"
            placeholder="Find movies, tv shows, people..."
            onChange={() => {}}
            type="text"
            name="search"
          />
        </StyledSearchBarWrapper>
      </StyledNavBarInner>
    </StyledNavBar>
  );
}

export default NavBar;
