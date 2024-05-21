import React from "react";
import styled from "styled-components";
import device from "@/styles/config";
import "@/styles/global.css";

export const SignupLayout = () => {
  return (
    <ContainerStyled>
      <ItemsStyled></ItemsStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  padding: 23.8rem 0px 23.3rem 0px;
  justify-content: center;
  align-items: center;
  background: var(--light-blue);
`;

const ItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SignupLayout;
