import styled from "styled-components";
import { SEARCH_IMAGE } from "./constant";
import { ChangeEventHandler, MouseEventHandler } from "react";
import CloseIcon from "./close.svg";
import device from "@/styles/config";
import "@/styles/global.css";

type SearchBarProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement>;
};

export const SearchBar = ({
  value,
  onChange,
  onCloseClick,
}: SearchBarProps) => {
  return (
    <ContainerStyled>
      <InputStyled
        type="search"
        placeholder="링크를 검색해 보세요."
        value={value}
        onChange={onChange}
      />
      <SearchIconStyled
        src={SEARCH_IMAGE}
        alt="검색창인 것을 알려주는 돋보기 아이콘"
      />
      {value && (
        <CloseStyled onClick={onCloseClick}>
          <CloseIcon />
        </CloseStyled>
      )}
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  position: relative;
  width: 100%;
`;

const InputStyled = styled.input`
  width: 100%;
  max-width: 106rem;
  height: 4.3rem;
  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  background-color: $color-gray-light;
  font-size: 1.4rem;

  &::placeholder {
    color: $color-text-content-gray;
  }

  @media ${device.tablet} {
    height: 5.4rem;
    padding-left: 4.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }
`;

const SearchIconStyled = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.6rem;
`;

const CloseStyled = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.6rem;
`;
