import { DefaultTheme } from "styled-components";
import { IButtonVariant } from "./types";

export const getBackgroundColor = (
  variant: IButtonVariant,
  theme: DefaultTheme
) => {
  const colorMap: Record<IButtonVariant, keyof DefaultTheme["colors"]> = {
    primary: "primary",
    secondary: "white",
    tertiary: "transparent",
    dark: "darkGrey",
  };

  return theme.colors[colorMap[variant]];
};

export const getBorderColor = (
  variant: IButtonVariant,
  theme: DefaultTheme
) => {
  const colorMap: Record<IButtonVariant, keyof DefaultTheme["colors"]> = {
    primary: "primaryBorder",
    secondary: "border",
    tertiary: "primary",
    dark: "darkGrey",
  };

  return theme.colors[colorMap[variant]];
};

export const getFontColor = (variant: IButtonVariant, theme: DefaultTheme) => {
  const colorMap: Record<IButtonVariant, keyof DefaultTheme["colors"]> = {
    primary: "white",
    secondary: "text",
    tertiary: "primary",
    dark: "white",
  };

  return theme.colors[colorMap[variant]];
};
