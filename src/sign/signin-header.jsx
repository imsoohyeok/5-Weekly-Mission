import React from "react";
import styled from "styled-components";
import LogoImage from "@/public/images/linkbrary.svg";
import "@/styles/global.css";

export const SigninHeader = () => {
  return (
    <HeaderStyled>
      <h1>
        <LogoLinkStyled href="index.html">
          <HeaderLogoStyled src={LogoImage} alt=" 로고 이미지" />
        </LogoLinkStyled>
      </h1>
      <SignCheckBoxStyled>
        <SignCheckTextStyled>회원이 아니신가요?</SignCheckTextStyled>
        <SignLinkStyled href="signup.html">회원가입하기</SignLinkStyled>
      </SignCheckBoxStyled>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
`;

const LogoLinkStyled = styled.a`
  display: flex;
  justify-content: center;
`;

const HeaderLogoStyled = styled.img`
  width: 22rem;
  height: 3.8rem;
`;

const SignCheckBoxStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-top: 1.6rem;
  font-size: 1.6rem;
`;

const SignCheckTextStyled = styled.span`
  color: var(--black);
  font-weight: 400;
  line-height: 2.4rem;
`;

const SignLinkStyled = styled.a`
  color: var(--primary);
  font-weight: 600;
`;
