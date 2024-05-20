import styled from "styled-components";
import "@/styles/global.css";

type CardContentProps = {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
};

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
}: CardContentProps) => {
  return (
    <ContainerStyled>
      <ElapsedTimeStyled>{elapsedTime}</ElapsedTimeStyled>
      <DescriptionStyled>{description}</DescriptionStyled>
      <CreatedAtStyled>{createdAt}</CreatedAtStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  height: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  transition: background-color 0.3s ease-in-out;

  &.hovered {
    background-color: $color-light-blue;
  }
`;

const ElapsedTimeStyled = styled.span`
  font-size: 1.3rem;
  color: $color-text-content-gray;
`;

const DescriptionStyled = styled.a`
  height: 4.9rem;
  @include ellipsis(2);
  word-break: break-word;
  font-size: 1.6rem;
  line-height: 150%;
`;

const CreatedAtStyled = styled.span`
  font-size: 1.4rem;
  color: $color-text-content-black;
`;
