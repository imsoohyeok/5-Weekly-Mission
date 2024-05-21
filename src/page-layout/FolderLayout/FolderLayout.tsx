import { ReactNode } from "react";
import styled from "styled-components";
import device from "@/styles/config";
import "@/styles/global.css";

type FolderLayoutProps = {
  linkForm: ReactNode;
  searchBar: ReactNode;
  folderToolBar: ReactNode;
  cardList: ReactNode;
};

export const FolderLayout = ({
  linkForm,
  searchBar,
  folderToolBar,
  cardList,
}: FolderLayoutProps) => {
  return (
    <ContainerStyled>
      {linkForm}
      <ItemsStyled>
        {searchBar}
        <FolderBoxStyled>
          {folderToolBar}
          {cardList}
        </FolderBoxStyled>
      </ItemsStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  row-gap: 2rem;
  padding-bottom: 2rem;

  @media ${device.tablet} {
    row-gap: 4rem;
    padding-bottom: 4rem;
  }
`;

const ItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  width: 100%;
  max-width: 112.4rem;
  padding: 0 3.2rem;

  @media ${device.tablet} {
    row-gap: 4rem;
  }
`;

const FolderBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media ${device.tablet} {
    row-gap: 2.4rem;
  }
`;
