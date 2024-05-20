import styled from "styled-components";
import { useGetFolders } from "@/src/folder/data-access-folder";
import { AddLinkModal } from "@/src/link/ui-add-link-modal";
import { LinkForm as UiLinkForm } from "@/src/link/ui-link-form";
import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { useIntersectionObserver } from "@/src/sharing/util/useIntersectionObserver";
import device from "@/styles/config";
import "@/styles/global.css";

type LinkFormProps = {
  hideFixedLinkForm?: boolean;
};

export const LinkForm = ({ hideFixedLinkForm = false }: LinkFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [linkUrl, setLinkUrl] = useState<string>("");
  const { ref, isIntersecting } = useIntersectionObserver<HTMLFormElement>();
  const showFixedLinkForm = !hideFixedLinkForm && !isIntersecting;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(event.target.value);
  };

  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <ContainerStyled>
      <UiLinkForm
        ref={ref}
        onSubmit={() => setIsModalOpen(true)}
        value={linkUrl}
        onChange={handleChange}
      />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        description={linkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />

      {showFixedLinkForm && (
        <FixedStyled>
          <UiLinkForm
            onSubmit={() => setIsModalOpen(true)}
            value={linkUrl}
            onChange={handleChange}
          />
        </FixedStyled>
      )}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.4rem 3.2rem 4rem;
  background-color: $color-light-blue;

  @media ${device.tablet} {
    padding: 6rem 3.2rem 9rem;
  `;

const FixedStyled = styled(ContainerStyled)`
    position: fixed;
    padding: 1.6rem 3.2rem;
    bottom: 0;
    left: 0;
    z-index: $z-index-fab;

    @media ${device.tablet} {
      padding: 2.4rem 3.2rem;
    }
  }
`;
