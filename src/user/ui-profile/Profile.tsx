import React from "react";
import styled from "styled-components";
import device from "@/styles/config.js";
import "@/styles/global.css";

type ProfileProps = {
  profile: {
    imageSource: string;
    email: string;
  };
};

export const Profile = ({ profile }: ProfileProps) => {
  return (
    <ContainerStyled>
      <ImageStyled src={profile.imageSource} alt="프로필 이미지" />
      <EmailStyled>{profile.email}</EmailStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
`;

const ImageStyled = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
`;

const EmailStyled = styled.span`
  display: none;
  font-size: 1.4rem;
  color: var(--gray100);

  @media ${device.tablet} {
    display: inline;
  }
`;
