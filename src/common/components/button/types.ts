import { IconType } from "@types";

type IButtonProps = {
  onClick: () => void;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  variant?: IButtonVariant;
  testID?: string;
  icon?: IconType;
};

type IButtonVariant = "primary" | "secondary" | "tertiary" | "dark";

type IStyledButtonProps = {
  $backgroundColor: string;
  $borderColor: string;
  $color: string;
};

export type { IButtonProps, IButtonVariant, IStyledButtonProps };
