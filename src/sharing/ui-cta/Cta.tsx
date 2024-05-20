import { ReactNode } from "react";
import styled from "styled-components";
import "@/styles/global.css";

type CtaProps = {
  children: ReactNode;
};

export const Cta = ({ children }: CtaProps) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  background: linear-gradient(91deg, $color-primary 0.12%, #6ae3fe 101.84%);
  color: $color-gray-light;
`;
