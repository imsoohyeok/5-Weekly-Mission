import { ReactNode } from "react";
import styled from "styled-components";
import device from "@/styles/config";

type SharedLayoutProps = {
  folderInfo: ReactNode;
  searchBar: ReactNode;
  cardList: ReactNode;
};

export const SharedLayout = ({
  folderInfo,
  searchBar,
  cardList,
}: SharedLayoutProps) => {
  return (
    <ContainerStyled>
      {folderInfo}
      <ItemsStyled>
        {searchBar}
        {cardList}
      </ItemsStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  row-gap: 2rem;
  padding-bottom: 2rem;

  @media ${device.tablet} {
    row-gap: 4rem;
    padding-bottom: 6rem;
  }
`;

const ItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  row-gap: 3.2rem;
  padding: 0 3.2rem;

  @media ${device.tablet} {
    row-gap: 4rem;
  }
`;
