/* eslint-disable react/display-name */
import { Cta } from "@/src/sharing/ui-cta";
import styled from "styled-components";
import {
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  forwardRef,
} from "react";
import device from "@/styles/config";
import "@/styles/global.css";

type LinkFormProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const LinkForm = forwardRef<HTMLFormElement, LinkFormProps>(
  ({ value, onChange, onSubmit }: LinkFormProps, ref) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(event);
    };

    return (
      <FormStyled ref={ref} onSubmit={handleSubmit}>
        <InputBoxStyled>
          <IconStyled src="images/link.svg" alt="링크 아이콘" />
          <InputStyled
            type="text"
            placeholder="링크를 추가해 보세요"
            value={value}
            onChange={onChange}
          />
        </InputBoxStyled>
        <ButtonStyled type="submit">
          <Cta>추가하기</Cta>
        </ButtonStyled>
      </FormStyled>
    );
  }
);

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  height: 5.3rem;
  column-gap: 1rem;
  padding: 0 1rem;
  border: 0.1rem solid $color-primary;
  border-radius: 1.5rem;
  background-color: $color-white;

  @media ${device.tablet} {
    height: 6.9rem;
    column-gap: 2rem;
    padding: 0 2rem;
  }
`;

const InputBoxStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 0.8rem;

  @media ${device.tablet} {
    column-gap: 1.2rem;
  }
`;

const IconStyled = styled.img`
  width: 1.6rem;
  height: 1.6rem;

  @media ${device.tablet} {
    width: 2rem;
    height: 2rem;
  }
`;

const InputStyled = styled.input`
  width: 100%;
  height: 5.1rem;
  font-size: 1.4rem;
  line-height: 150%;

  @media ${device.tablet} {
    height: 6.7rem;
    font-size: 1.6rem;
  }

  &::placeholder {
    color: $color-gray60;
  }
`;

const ButtonStyled = styled.button`
  width: 8rem;
  height: 3.7rem;
  font-size: 1.4rem;
  color: inherit;
`;
