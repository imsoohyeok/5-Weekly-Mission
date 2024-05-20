import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import "@/styles/global.css";

type ModalContentBoxProps = {
  header: ReactNode;
  content: ReactNode;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

export const ModalContentBox = ({
  header,
  content,
  onCloseClick,
}: ModalContentBoxProps) => {
  return (
    <ContainerStyled>
      <button onClick={onCloseClick}>
        <CloseStyled src="images/close.svg" alt="X모양 닫기 버튼" />
      </button>
      <ItemsStyled>
        {header}
        {content}
      </ItemsStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  position: relative;
  width: 36rem;
  height: fit-content;
  padding: 3.2rem 4rem;
  border-radius: 1.5rem;
  background-color: $color-white;
`;

const CloseStyled = styled.img`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

const ItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 2.4rem;
`;
