import styled from "styled-components";
import device from "@/styles/config";
import "@/styles/global.css";

type FolderInfoProps = {
  profileImage: string;
  ownerName: string;
  folderName: string;
};

export const FolderInfo = ({
  profileImage,
  ownerName,
  folderName,
}: FolderInfoProps) => {
  return (
    <ContainerStyled>
      <ProfileStyled src={profileImage} alt="폴더 소유자 프로필 이미지" />
      <OwnerStyled>{ownerName}</OwnerStyled>
      <FolderStyled>{folderName}</FolderStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0 4rem;
  box-sizing: border-box;
  background-color: $color-light-blue;

  @media ${device.tablet} {
    padding: 2rem 0 6rem;
  }
`;

const ProfileStyled = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  @media ${device.tablet} {
    width: 6rem;
    height: 6rem;
  }
`;

const OwnerStyled = styled.span`
  margin-top: 0.6rem;
  font-size: 1.4rem;

  @media ${device.tablet} {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

const FolderStyled = styled.h2`
  margin-top: 1rem;
  font-size: 3.2rem;
  font-weight: 600;

  @media ${device.tablet} {
    margin-top: 2rem;
    font-size: 4rem;
  }
`;
