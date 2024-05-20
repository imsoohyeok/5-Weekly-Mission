import styled from "styled-components";
import { Folder } from "@/src/folder/type";
import { FolderItem } from "@/src/folder/ui-folder-item";
import { Dispatch, KeyboardEventHandler, SetStateAction } from "react";
import { Modal } from "@/src/sharing/ui-modal";
import { ModalContentBox } from "@/src/sharing/ui-modal-content-box";
import { ModalContentButton } from "@/src/sharing/ui-modal-content-button";
import { ModalContentDescription } from "@/src/sharing/ui-modal-content-description";
import { ModalContentTitle } from "@/src/sharing/ui-modal-content-title";

type AddLinkModalProps = {
  isOpen: boolean;
  folders: Folder[];
  description: string;
  selectedFolderId: number | null;
  setSelectedFolderId: Dispatch<SetStateAction<number | null>>;
  onAddClick: () => void;
  onCloseClick: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

export const AddLinkModal = ({
  isOpen,
  folders,
  description,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <ModalHeaderStyled>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </ModalHeaderStyled>
        }
        content={
          <ModalContentStyled>
            <FolderListStyled>
              {folders?.map(({ id, name, linkCount }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={linkCount}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </FolderListStyled>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 2.4rem;
`;

const FolderListStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 0;
  max-height: 17.2rem;
  overflow-y: auto;
  row-gap: 0.4rem;
`;
