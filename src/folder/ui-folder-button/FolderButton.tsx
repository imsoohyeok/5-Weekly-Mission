import { MouseEventHandler } from "react";
import styled from "styled-components";
import device from "@/styles/config";
import "@/styles/global.css";

type FolderButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
};

export const FolderButton = ({
  text,
  onClick,
  isSelected = false,
}: FolderButtonProps) => {
  return (
    <ContainerStyled onClick={onClick}>
      <span>{text}</span>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.button`
  display: flex;
  align-items: center;
  height: 3.1rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 0.1rem solid $color-primary;
  font-size: 1.4rem;
  transition: all 0.3s ease-in-out;

  @media ${device.tablet} {
    height: 3.7rem;
    padding: 0 1.2rem;
    font-size: 1.6rem;
  }

  &:hover {
    background-color: $color-gray10;
  }

  &.selected {
    background-color: $color-primary;
    color: $color-white;
  }
`;
