import styled from "styled-components";
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentDescription } from "@/src/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";
import KakaoIcon from "./kakao.svg";
import FacebookIcon from "./facebook.svg";
import LinkIcon from "./link.svg";
import { KeyboardEventHandler, MouseEventHandler } from "react";
import "@/styles/global.css";

type ShareModalProps = {
  isOpen: boolean;
  folderName: string;
  onKakaoClick: MouseEventHandler<HTMLButtonElement>;
  onFacebookClick: MouseEventHandler<HTMLButtonElement>;
  onLinkCopyClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const ShareModal = ({
  isOpen,
  folderName,
  onKakaoClick,
  onFacebookClick,
  onLinkCopyClick,
  onCloseClick,
  onKeyDown,
}: ShareModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <ModalHeaderStyled>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </ModalHeaderStyled>
        }
        content={
          <ModalContentStyled>
            <ButtonStyled onClick={onKakaoClick}>
              <KakaoIcon />
              <span>카카오톡</span>
            </ButtonStyled>
            <ButtonStyled onClick={onFacebookClick}>
              <FacebookIcon />
              <span>페이스북</span>
            </ButtonStyled>
            <ButtonStyled onClick={onLinkCopyClick}>
              <LinkIcon />
              <span>링크 복사</span>
            </ButtonStyled>
          </ModalContentStyled>
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

const ModalContentStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3.2rem;
`;

const ButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  font-size: 1.3rem;
  line-height: 1.5rem;
`;
