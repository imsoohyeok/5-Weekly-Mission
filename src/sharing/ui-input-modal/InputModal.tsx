import styled from "styled-components";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from "react";
import { Input } from "@/src/sharing/ui-input";
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/src/sharing/ui-modal-content-button";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";
import "@/styles/global.css";

type InputModalProps = {
  isOpen: boolean;
  title: string;
  placeholder: string;
  buttonText: string;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const InputModal = ({
  isOpen,
  title,
  placeholder,
  buttonText,
  onCloseClick,
  onKeyDown,
  value,
  onChange,
}: InputModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={<ModalContentTitle>{title}</ModalContentTitle>}
        content={
          <ContainerStyled>
            <Input
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            <ModalContentButton onClick={() => {}}>
              {buttonText}
            </ModalContentButton>
          </ContainerStyled>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ModalContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 1.5rem;
`;

const ButtonStyled = styled.button`
  width: 28rem;
  height: 5.1rem;
  font-size: 1.6rem;
  color: $color-gray-light;
`;
