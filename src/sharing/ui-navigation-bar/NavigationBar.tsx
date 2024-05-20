import styled from "styled-components";
import { ROUTE } from "@/src/sharing/util";
import { Cta } from "@/src/sharing/ui-cta";
import { Profile } from "@/src/user/ui-profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import Link from "next/link";
import device from "@/styles/config";
import "@/styles/global.css";

type NavigationBarProps = {
  profile: {
    imageSource: string;
    email: string;
  } | null;
  isSticky: boolean;
};

export const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <ContainerStyled>
      <ItemsStyled>
        <Link href={ROUTE.랜딩}>
          <LogoStyled src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta>
              <SignInStyled>{TEXT.login}</SignInStyled>
            </Cta>
          </a>
        )}
      </ItemsStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: $color-light-blue;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: $z-index-nav;
  }
`;

const ItemsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media ${device.tablet} {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media ${device.pc} {
    max-width: 192rem;
    padding: 0 20rem;
  }
`;

const LogoStyled = styled.img`
  height: 1.6rem;

  @include tablet {
    height: 2.4rem;
  }
`;

const SignInStyled = styled.span`
  display: inline-block;
  width: 8rem;
  padding: 1rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  @media ${device.tablet} {
    width: 12.8rem;
    padding: 1.6rem 0;
    font-size: 1.8rem;
  }
`;
