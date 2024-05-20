import styled from "styled-components";
import {
  CSSProperties,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { Card } from "@/src/sharing/ui-card";
import { CardContent } from "@/src/sharing/ui-card-content";
import { CardImage } from "@/src/sharing/ui-card-image";
import { Popover } from "@/src/sharing/ui-popover";
import device from "@/styles/config";
import Image from "next/image";
import "@/styles/global.css";

type EditableCardProps = {
  url: string;
  imageSource: string;
  alt: string;
  elapsedTime: string;
  description: string;
  createdAt: string;
  popoverPosition: {
    top?: CSSProperties["top"];
    right?: CSSProperties["right"];
    bottom?: CSSProperties["bottom"];
    left?: CSSProperties["left"];
  };
  onDeleteClick: () => void;
  onAddToFolderClick: () => void;
};

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  popoverPosition,
  onDeleteClick,
  onAddToFolderClick,
}: EditableCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const kebabButtonRef = useRef(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleKebabClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setIsPopoverOpen(true);
  };
  const handleBackgroundClick = useCallback(() => {
    setIsPopoverOpen(false);
  }, []);
  const handleDeleteClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    onDeleteClick();
    setIsPopoverOpen(false);
  };
  const handleAddToFolderClick: MouseEventHandler<HTMLLIElement> = (event) => {
    event.preventDefault();
    onAddToFolderClick();
    setIsPopoverOpen(false);
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <CardImage imageSource={imageSource} alt={alt} isZoomedIn={isHovered} />
        <CardContent
          elapsedTime={elapsedTime}
          description={description}
          createdAt={createdAt}
          isHovered={isHovered}
        />
        <StarStyled onClick={(event) => event.preventDefault()}>
          <Image src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
        </StarStyled>
        <KebabStyled ref={kebabButtonRef} onClick={handleKebabClick}>
          <Image src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
        </KebabStyled>
        <Popover
          isOpen={isPopoverOpen}
          anchorRef={kebabButtonRef}
          anchorPosition={popoverPosition}
          onBackgroundClick={handleBackgroundClick}
        >
          <PopoverList>
            <li onClick={handleDeleteClick}>삭제하기</li>
            <li onClick={handleAddToFolderClick}>폴더에 추가</li>
          </PopoverList>
        </Popover>
      </Card>
    </a>
  );
};

const StarStyled = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3.4rem;
  height: 3.4rem;
`;

const KebabStyled = styled.button`
  position: absolute;
  top: 20.7rem;
  right: 2rem;

  @media ${device.tablet} {
    top: 21.5rem;
  }
`;

const PopoverList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
  width: 10rem;
  padding: 0;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);
  background: $color-white;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    height: 3.1rem;
    font-size: 1.4rem;

    &:hover {
      background: $color-gray10;
      color: $color-primary;
    }
  }
`;
