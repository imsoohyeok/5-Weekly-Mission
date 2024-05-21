import React from "react";
import styled from "styled-components";
import "@/styles/global.css";
import Image from "next/image";

export const SigninHeader = () => {
  return (
    <form id="form">
      <SignInputBoxsStyled>
        <SignInputBoxStyled>
          <LabelStyled for="sign-email">이메일</LabelStyled>
          <InputStyled
            id="sign-email"
            class="sign-email"
            name="sign-email"
            type="email"
          />
          <div class="email-err hide err-font">이메일을 입력해주세요.</div>
        </SignInputBoxStyled>
        <SignInputBoxStyled>
          <LabelStyled for="sign-password">비밀번호</LabelStyled>
          <SignInputPasswordBoxStyled>
            <InputStyled
              id="sign-password"
              class="sign-password"
              name="sign-password"
              type="password"
            />
            <PasswordButtonStyled class=".password-button" type="button">
              <Image
                class="eye-on hide"
                src="./images/eye-on.svg"
                alt="패스워드 눈 뜬 모양 이미지"
              />
              <Image
                class="eye-off"
                src="./images/eye-off.svg"
                alt="패스워드 눈 감은 모양 이미지"
              />
            </PasswordButtonStyled>
          </SignInputPasswordBoxStyled>
          <div class="password-err hide err-font">
            비밀번호를 입력해 주세요.
          </div>
        </SignInputBoxStyled>
        <CtaStyled type="submit">로그인</CtaStyled>
      </SignInputBoxsStyled>
    </form>
  );
};

const SignInputBoxsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  gap: 2.4rem;
`;

const SignInputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const LabelStyled = styled.label`
  color: var(--black);
  font-size: 1.4rem;
`;

const InputStyled = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem 1.5rem;
  width: 40rem;
  border: 1px solid var(--gray20);
  border-radius: 8px;
  background: var(--white);
  color: var(--black);
  font-size: 1.6rem;
  line-height: 150%;
`;

const SignInputPasswordBoxStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
`;

const PasswordButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.5rem;
  top: 2.4rem;
  width: 1.6rem;
  height: 1.6rem;
`;

const CtaStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: linear-gradient(91deg, var(--primary) 0%, #6ae3fe 101%);
  border-radius: 8px;
  color: #f5f5f5;
  font-size: 1.8rem;
  font-weight: 600;
  width: 100%;
  padding: 1.6rem 2rem;
  text-decoration: none;
  margin-top: 0.6rem;
`;
