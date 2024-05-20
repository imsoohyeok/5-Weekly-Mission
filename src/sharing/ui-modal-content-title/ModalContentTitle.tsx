import { ReactNode } from "react";
import styled from "styled-components";
import "@/styles/global.css";

type ModalContentTitleProps = {
  children: ReactNode;
};

export const ModalContentTitle = ({ children }: ModalContentTitleProps) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h2`
  color: $color-gray100;
  font-size: 2rem;
  font-weight: 700;
`;
