/**
 *
 * ApplicationWrapper
 *
 */

import NavBar from "@components/navBar";
import { StyledApplicationWrapper } from "./styles";
import { IApplicationWrapperProps } from "./types";

function ApplicationWrapper({
  children,
}: IApplicationWrapperProps): JSX.Element {
  return (
    <>
      <NavBar />
      <StyledApplicationWrapper>{children}</StyledApplicationWrapper>
    </>
  );
}

export default ApplicationWrapper;
