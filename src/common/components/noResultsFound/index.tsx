/**
 *
 * NoResultsFound
 *
 */

import SvgManager from "@components/svgManager";
import { StyledNoResultsFound } from "./styles";
import { INoResultsFoundProps } from "./types";

function NoResultsFound(_props: INoResultsFoundProps): JSX.Element {
  return (
    <StyledNoResultsFound>
      <div>
        <SvgManager
          iconName="noResults"
          svgProp={{
            width: 100,
            height: 100,
          }}
        />
        <h1>No results found</h1>
      </div>
    </StyledNoResultsFound>
  );
}

export default NoResultsFound;
