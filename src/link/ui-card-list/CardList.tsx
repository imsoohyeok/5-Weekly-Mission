/* eslint-disable react/display-name */
import { ReactNode, forwardRef } from "react";
import styled from "styled-components";
import device from "@/styles/config";
import "@/styles/global.css";

export const CardList = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return <ContainerStyled ref={ref}>{children}</ContainerStyled>;
  }
);

const ContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(32.5rem);
  justify-content: center;
  width: 100%;
  max-width: 106rem;
  row-gap: 2rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, 34rem);
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`;
