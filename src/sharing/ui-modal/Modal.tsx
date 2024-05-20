import styled from "styled-components";
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from "react";
import { Portal } from "@/src/sharing/ui-portal";
import "@/styles/global.css";

type ModalProps = {
  children: ReactNode;
  isOpen?: boolean;
  disableScrollLock?: boolean;
  hideBackdrop?: boolean;
  onBackdropClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

export const Modal = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: ModalProps) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <ContainerStyled
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {children}
      </ContainerStyled>
    </Portal>
  );
};

const ContainerStyled = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: none;
  z-index: $z-index-modal;
  animation: fadeIn 0.2s;

  &.backdrop {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
