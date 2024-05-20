import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";
import styled from "styled-components";
import "@/styles/global.css";

export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  hasError?: boolean;
  helperText?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const Input = ({
  value,
  placeholder,
  type = "text",
  hasError = false,
  helperText,
  onChange,
  onBlur,
}: InputProps) => {
  return (
    <ContainerStyled>
      <InputStyled
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {helperText && <HelperTextStyled>{helperText}</HelperTextStyled>}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.6rem;
`;

const InputStyled = styled.input`
  width: 100%;
  border: 0.1rem solid $color-gray20;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  color: $color-gray100;
  padding: 1.8rem 1.5rem;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: $color-gray60;
  }

  &:focus {
    border-color: $color-primary;
  }

  &.error {
    border-color: $color-red;
  }
`;

const HelperTextStyled = styled.p`
  font-size: 1.4rem;

  &.error {
    color: $color-red;
  }
`;
