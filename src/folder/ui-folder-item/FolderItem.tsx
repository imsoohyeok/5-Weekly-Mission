import { MouseEventHandler } from "react";
import styled from "styled-components";
import "@/styles/global.css";

type FolderItemProps = {
  folderName: string;
  linkCount: number;
  isSelected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const FolderItem = ({
  folderName,
  linkCount,
  isSelected = false,
  onClick,
}: FolderItemProps) => {
  return (
    <ButtonStyled onClick={onClick}>
      <NameStyled>{folderName}</NameStyled>
      <CountStyled>{linkCount}개 링크</CountStyled>
      {isSelected && <CheckStyled src="images/check.svg" alt="체크 아이콘" />}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  flex: 0 0 4rem;
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  width: 100%;
  height: 4rem;
  padding: 0.8rem;
  border-radius: 0.8rem;

  &:hover {
    background-color: $color-light-blue;
  }

  &.selected {
    background-color: $color-light-blue;
  }
`;

const NameStyled = styled.span`
  font-size: 1.6rem;
  color: $color-gray100;

  &.selected {
    color: $color-primary;
  }
`;

const CountStyled = styled.span`
  font-size: 1.4rem;
  color: $color-gray60;
`;

const CheckStyled = styled.img`
  margin-left: auto;
`;
