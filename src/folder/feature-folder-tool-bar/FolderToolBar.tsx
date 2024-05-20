import styled from "styled-components";
import { AddFolderButton } from "@/src/folder/ui-add-folder-button";
import { FolderButton } from "@/src/folder/ui-folder-button";
import { IconAndTextButton } from "@/src/sharing/ui-icon-and-text-button";
import {
  ALL_LINKS_TEXT,
  BUTTONS,
  KAKAO_SHARE_DATA,
  MODALS_ID,
} from "./constant";
import { ALL_LINKS_ID } from "@/src/link/data-access-link/constant";
import { KeyboardEvent, useState } from "react";
import { ShareModal } from "@/src/folder/ui-share-modal";
import { InputModal } from "@/src/sharing/ui-input-modal";
import { AlertModal } from "@/src/sharing/ui-alert-modal";
import { Folder, SelectedFolderId } from "@/src/folder/type";
import { copyToClipboard, useKakaoSdk } from "@/src/sharing/util";
import { useRouter } from "next/router";
import device from "@/styles/config";
import styles from "@/styles/global.module.css";

type FolderToolBarProps = {
  folders: Folder[];
  selectedFolderId: SelectedFolderId;
  onFolderClick: (folderId: SelectedFolderId) => void;
};

export const FolderToolBar = ({
  folders,
  selectedFolderId,
  onFolderClick,
}: FolderToolBarProps) => {
  const { shareKakao } = useKakaoSdk();
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name ?? "";

  const getShareLink = () =>
    `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;
  const closeModal = () => setCurrentModal(null);
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };
  const handleKakaoClick = () => {
    shareKakao({ url: getShareLink(), ...KAKAO_SHARE_DATA });
  };
  const handleFacebookClick = () =>
    window?.open(`http://www.facebook.com/sharer.php?u=${getShareLink()}`);
  const handleLinkCopyClick = () => copyToClipboard(getShareLink());

  return (
    <ContainerStyled>
      <FoldersStyled>
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => onFolderClick(ALL_LINKS_ID)}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => onFolderClick(id)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </FoldersStyled>
      <AddButtonStyled>
        <AddFolderButton onClick={() => setCurrentModal(MODALS_ID.addFolder)} />
        <InputModal
          isOpen={currentModal === MODALS_ID.addFolder}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </AddButtonStyled>
      <FolderNameStyled>{folderName}</FolderNameStyled>
      {selectedFolderId !== ALL_LINKS_ID && (
        <ButtonsStyled>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <IconAndTextButton
              key={text}
              text={text}
              iconSource={iconSource}
              onClick={() => setCurrentModal(modalId)}
            />
          ))}
          <ShareModal
            isOpen={currentModal === MODALS_ID.share}
            folderName={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <InputModal
            isOpen={currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <AlertModal
            isOpen={currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
            onClick={() => {}}
          />
        </ButtonsStyled>
      )}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.2rem;

  @media ${device.tablet} {
    display: grid;
    grid-template-areas:
      "folders folders add-button"
      "folder-name buttons buttons";
    justify-content: space-between;
    align-items: center;
    row-gap: 2.4rem;
    column-gap: 1.2rem;
  }
`;

const FoldersStyled = styled.div`
  grid-area: folders;
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.8rem;
  row-gap: 1.2rem;
  flex-grow: 1;
`;

const AddButtonStyled = styled.div`
  grid-area: add-button;

  position: fixed;
  bottom: 10.1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: $z-index-fab;

  @media ${device.tablet} {
    justify-self: flex-end;

    position: static;
    transform: none;
  }
`;

const FolderNameStyled = styled.h2`
  grid-area: folder-name;
  margin-top: 1.6rem;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02rem;

  @media ${device.tablet} {
    margin-top: 0;
    font-size: 2.4rem;
  }
`;

const ButtonsStyled = styled.div`
  justify-self: flex-start;
  grid-area: buttons;
  display: flex;
  column-gap: 1.2rem;

  @media ${device.tablet} {
    justify-self: flex-end;
  }
`;
