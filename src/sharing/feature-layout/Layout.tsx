import styled from "styled-components";
import { useGetUser } from "@/src/user/data-access-user";
import { Footer } from "@/src/sharing/ui-footer";
import { NavigationBar } from "@/src/sharing/ui-navigation-bar";
import { ReactNode, RefObject } from "react";

type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>;
};

export const Layout = ({
  children,
  isSticky = true,
  footerRef,
}: LayoutProps) => {
  const { data } = useGetUser();
  const profile = data
    ? { email: data.email, imageSource: data.profileImageSource }
    : null;

  return (
    <FooterStyled>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <MainStyled>{children}</MainStyled>
      <Footer ref={footerRef} />
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  height: 16rem;
`;

const MainStyled = styled.main`
  min-height: calc(100vh - $footer-height);
`;
