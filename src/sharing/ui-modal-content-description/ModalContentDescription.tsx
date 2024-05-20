import { ReactNode } from "react";
import styled from "styled-components";
import "@/styles/global.css";

type ModalContentDescriptionProps = {
  children: ReactNode;
};

export const ModalContentDescription = ({
  children,
}: ModalContentDescriptionProps) => {
  return <DescriptionStyled>{children}</DescriptionStyled>;
};

const DescriptionStyled = styled.p`
  color: $color-gray60;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;
