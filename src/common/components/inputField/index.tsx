/**
 *
 * TextInput
 *
 */

import SvgManager from "@components/svgManager";
import {
  StyledInput,
  StyledInputInner,
  StyledInputLabel,
  StyledInputWrapper,
} from "./styles";
import { IFormFieldProps } from "./types";

function InputField({
  label,
  placeholder,
  type,
  icon,
  onChange,
  testID,
  name,
}: IFormFieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <StyledInputWrapper>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}

      <StyledInputInner>
        {icon && (
          <SvgManager
            iconName={icon}
            svgProp={{
              width: 20,
              height: 20,
            }}
          />
        )}
        <StyledInput
          onChange={handleChange}
          hasIcon={!!icon}
          placeholder={placeholder}
          type={type}
          data-testid={`input-test-${name}` || testID}
        />
      </StyledInputInner>
    </StyledInputWrapper>
  );
}

export default InputField;
