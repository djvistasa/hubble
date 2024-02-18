/**
 *
 * Button
 *
 */

import SvgManager from "@components/svgManager";
import { useTheme } from "styled-components";
import { StyledButton, StyledIconWrapper } from "./styles";
import { IButtonProps } from "./types";
import { getBackgroundColor, getBorderColor, getFontColor } from "./utils";

function Button({
  title,
  onClick,
  variant = "primary",
  testID,
  icon,
  disabled,
}: IButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <StyledButton
      $backgroundColor={getBackgroundColor(variant, theme)}
      $borderColor={getBorderColor(variant, theme)}
      $color={getFontColor(variant, theme)}
      onClick={onClick}
      data-testid={testID}
      disabled={disabled}
    >
      {icon && (
        <StyledIconWrapper>
          <SvgManager iconName={icon} svgProp={{ width: 15, height: 13 }} />
        </StyledIconWrapper>
      )}
      {title}
    </StyledButton>
  );
}

export default Button;
