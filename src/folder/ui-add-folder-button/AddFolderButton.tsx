import styled from "styled-components";
import AddIcon from "./add.svg";
import { MouseEventHandler } from "react";
import device from "@/styles/config";
import "@/styles/global.css";

type AddFolderButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const AddFolderButton = ({ onClick }: AddFolderButtonProps) => {
  return (
    <ContainerStyled onClick={onClick}>
      <span>폴더 추가</span>
      <IconStyled>
        <AddIcon />
      </IconStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;

  height: 3.5rem;
  padding: 0 2.4rem;
  border-radius: 2rem;
  border: 0.1rem solid $color-white;
  background-color: $color-primary;
  color: $color-gray10;

  @media ${device.tablet} {
    padding: 0;
    background-color: transparent;
    color: $color-primary;
  }
`;

const IconStyled = styled.div`
  fill: $color-gray10;

  @media ${device.tablet} {
    fill: $color-primary;
  }
`;
