import { FormFieldType, IconType } from "@types";

type IFormFieldProps = {
  placeholder?: string;
  label?: string;
  type: FormFieldType;
  defaultValue?: string;
  onChange: (value: any) => void;
  onBlur?: () => void;
  value?: any;
  icon?: IconType;
  testID?: string;
  name: string;
};

type IStyledInputProps = {
  hasIcon?: boolean;
};

export type { IFormFieldProps, IStyledInputProps };
