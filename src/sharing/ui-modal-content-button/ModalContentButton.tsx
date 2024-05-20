import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import "@/styles/global.css";

type ModalContentButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  themeColor?: "blue" | "red";
};

export const ModalContentButton = ({
  children,
  onClick,
  themeColor = "blue",
}: ModalContentButtonProps) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5.1rem;
  background-color: $color-red;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: $color-gray-light;

  &.red {
    background-color: $color-red;
  }

  &.blue {
    background: linear-gradient(91deg, $color-primary 0.12%, #6ae3fe 101.84%);
  }
`;
