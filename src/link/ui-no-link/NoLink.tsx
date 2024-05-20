import styled from "styled-components";
import device from "@/styles/config";
import "@/styles/global.css";

export const NoLink = () => {
  return (
    <ContainerStyled>
      <MessageStyled>저장된 링크가 없습니다</MessageStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3.4rem;

  @media ${device.tablet} {
    padding-top: 4.1rem;
  }
`;

const MessageStyled = styled.span`
  font-size: 1.4rem;
  line-height: 150%;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;
