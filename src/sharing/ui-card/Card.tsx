import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import device from "@/styles/config";
import "@/styles/global.css";

type CardProps = {
  children: ReactNode;
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

export const Card = ({ children, onMouseOver, onMouseLeave }: CardProps) => {
  return (
    <ContainerStyled onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 32.5rem;
  height: 32.7rem;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;

  @media ${device.tablet} {
    width: 34rem;
    height: 33.4rem;
  }
`;
