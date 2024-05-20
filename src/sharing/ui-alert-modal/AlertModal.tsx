import styled from "styled-components";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/src/sharing/ui-modal-content-button";
import { ModalContentDescription } from "@/src/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";
import "@/styles/global.css";

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <ModalHeaderStyled>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </ModalHeaderStyled>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};

const ModalHeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 0.8rem;
`;

const ButtonStyled = styled.button`
  width: 100%;
  height: 5.1rem;
  background-color: $color-red;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: $color-gray-light;
`;
