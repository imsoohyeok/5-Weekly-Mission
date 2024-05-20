import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { Input, InputProps } from "../ui-input";
import EyeOnIcon from "./eye-on.svg";
import EyeOffIcon from "./eye-off.svg";

type PasswordInputProps = {
  hasEyeIcon?: boolean;
} & Omit<InputProps, "type">;

export const PasswordInput = ({
  hasEyeIcon = false,
  value,
  placeholder,
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputType = useMemo(
    () => (isPasswordVisible ? "text" : "password"),
    [isPasswordVisible]
  );
  const EyeIcon = useMemo(
    () => (
      <ButtonStyled onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
        {isPasswordVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </ButtonStyled>
    ),
    [isPasswordVisible]
  );

  return (
    <ContainerStyled>
      <Input
        value={value}
        placeholder={placeholder}
        type={inputType}
        hasError={hasError}
        helperText={helperText}
        onChange={onChange}
        onBlur={onBlur}
      />
      {hasEyeIcon && EyeIcon}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const ButtonStyled = styled.div`
  position: absolute;
  top: 2.2rem;
  right: 1.5rem;
`;
