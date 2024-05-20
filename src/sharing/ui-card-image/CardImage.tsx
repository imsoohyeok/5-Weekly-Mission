import styled from "styled-components";
import { DEFAULT_IMAGE } from "./constant";
import device from "@/styles/config";
import "@/styles/global.css";

type CardImageProps = {
  imageSource: string;
  isZoomedIn: boolean;
  alt: string;
};

export const CardImage = ({ imageSource, isZoomedIn, alt }: CardImageProps) => {
  return (
    <ContainerStyled>
      <ImageStyled src={imageSource ?? DEFAULT_IMAGE} alt={alt} />
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  width: 100%;
  min-height: 19.2rem;
  height: 19.2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;

  @media ${device.mobile} {
    min-height: 20rem;
    height: 20rem;
  }
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem 1.5rem 0 0;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &.zoomin {
    transform: scale(1.3);
  }
`;
