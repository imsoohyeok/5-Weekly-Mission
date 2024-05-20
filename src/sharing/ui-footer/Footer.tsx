/* eslint-disable react/display-name */
import styled from "styled-components";
import { ROUTE } from "@/src/sharing/util";
import { TEXT } from "./constant";
import { forwardRef } from "react";
import device from "@/styles/config";
import "@/styles/global.css";
import Image from "next/image";

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  const link = "link";

  return (
    <ContainerStyled ref={ref}>
      <ItemsStyled>
        <CopyrightStyled>{TEXT.codeit}</CopyrightStyled>
        <LinksStyled>
          <a className={link} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </a>
          <a className={link} href={ROUTE.FAQ}>
            {TEXT.faq}
          </a>
        </LinksStyled>
        <SnsStyled>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </SnsStyled>
      </ItemsStyled>
    </ContainerStyled>
  );
});

const ContainerStyled = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  margin-top: 4rem;
  background-color: $color-black;

  @include tablet {
    margin-top: 6rem;
  }
`;

const ItemsStyled = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template:
    "footer-links sns"
    ". ." 1fr
    "copyright .";
  width: 100%;
  padding: 3.2rem;
  color: $color-text-gray;
  font-size: 1.6rem;
  font-family: Arial;

  @media ${device.tablet} {
    grid-template: "copyright footer-links sns";
    height: fit-content;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 0;
  }
`;

const CopyrightStyled = styled.span`
  grid-area: copyright;
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
`;

const LinksStyled = styled.div`
  grid-area: footer-links;
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
`;

const SnsStyled = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
`;
