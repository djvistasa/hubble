/**
 *
 * NavBar
 *
 */
import InputField from "@components/inputField";
import useMovies from "@features/movies/hooks/useMovies";
import { useMoviesStore } from "@features/movies/store";
import { useDebounceCallback } from "usehooks-ts";
import {
  StyledAppName,
  StyledNavBar,
  StyledNavBarInner,
  StyledSearchBarWrapper,
} from "./styles";
import { INavBarProps } from "./types";

function NavBar(_props: INavBarProps): JSX.Element {
  const { searchForMovie } = useMovies();
  const { resetMovies } = useMoviesStore();
  const handleSearch = useDebounceCallback((searchTerm: string) => {
    if (!searchTerm) return resetMovies();
    searchForMovie.mutate(searchTerm);
  }, 500);
  return (
    <StyledNavBar>
      <StyledNavBarInner>
        <StyledAppName>Hubble Movies</StyledAppName>

        <StyledSearchBarWrapper>
          <InputField
            icon="search"
            placeholder="Find movies..."
            onChange={handleSearch}
            type="text"
            name="search"
          />
        </StyledSearchBarWrapper>
      </StyledNavBarInner>
    </StyledNavBar>
  );
}

export default NavBar;
