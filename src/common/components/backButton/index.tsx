/**
 *
 * BackButton
 *
 */

import SvgManager from "@components/svgManager";
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "./styles";
import { IBackButtonProps } from "./types";

function BackButton(_props: IBackButtonProps): JSX.Element {
  const navigate = useNavigate();

  const onBackPress = () => {
    navigate(-1);
  };
  return (
    <StyledBackButton onClick={onBackPress}>
      <SvgManager
        iconName="back"
        svgProp={{
          width: 20,
          height: 20,
          fill: "black",
        }}
      />
      <p>Back</p>
    </StyledBackButton>
  );
}

export default BackButton;
