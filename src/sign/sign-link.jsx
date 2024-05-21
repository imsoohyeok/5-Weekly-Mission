/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import "@/styles/global.css";
import Image from "next/image";
import signGoogle from "@/public/images/signGoogle.png";
import signGoogleback from "@/public/images/signGoogleback.svg";
import signKakao from "@/public/images/signKakao.svg";
import signKakaoback from "@/public/images/signKakaoback.svg";

export const OtherLink = () => {
  return (
    <OtherSignStyled>
      <OtherSignTextStyled>소셜 로그인</OtherSignTextStyled>
      <IconStyled>
        <IconBoxStyled>
          <a href="https://www.google.com/" target="_blank">
            <Image src={signGoogleback} />
            <BoxInIconStyled src={signGoogle} />
          </a>
        </IconBoxStyled>
        <IconBoxStyled>
          <a href="https://www.kakaocorp.com/page/" target="_blank">
            <Image src={signKakaoback} />
            <BoxInIconStyled src={signKakao} />
          </a>
        </IconBoxStyled>
      </IconStyled>
    </OtherSignStyled>
  );
};

const OtherSignStyled = styled.div`
  display: flex;
  width: 88%;
  padding: 1.2rem 2.4rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray3);
  background: var(--gray4);
  margin-top: 3.2rem;
`;

const OtherSignTextStyled = styled.span`
  color: var(--gray1);
  font-size: 1.4rem;
`;

const IconStyled = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;

const IconBoxStyled = styled.div`
  position: relative;
  width: 4.2rem;
  height: 4.2rem;
`;

const BoxInIconStyled = styled.img`
  position: absolute;
  inset: 1rem;
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  justify-content: center;
  align-items: center;
`;
