import { MouseEventHandler } from "react";
import styled from "styled-components";
import "@/styles/global.css";

type IconAndTextButtonProps = {
  iconSource: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const IconAndTextButton = ({
  iconSource,
  text,
  onClick,
}: IconAndTextButtonProps) => {
  return (
    <ContainerStyled onClick={onClick}>
      <IconStyled src={iconSource} alt={`${text} 아이콘`} />
      <TextStyled>{text}</TextStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

const IconStyled = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const TextStyled = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: $color-gray60;
`;
