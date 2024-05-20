import styled from "styled-components";
import { CSSProperties, useCallback, useMemo, useRef } from "react";
import { Portal } from "@/src/sharing/ui-portal";
import { useBackgroundClick } from "@/src/sharing/util";
import "@/styles/global.css";

type PopoverProps = {
  children: React.ReactNode;
  isOpen: boolean;
  anchorRef?: React.MutableRefObject<Element | null>;
  anchorPosition?: {
    top?: CSSProperties["top"];
    right?: CSSProperties["right"];
    bottom?: CSSProperties["bottom"];
    left?: CSSProperties["left"];
  };
  disableCloseWithBackgroundClick?: boolean;
  onBackgroundClick: () => void;
};

export const Popover = ({
  children,
  isOpen,
  anchorRef,
  anchorPosition,
  disableCloseWithBackgroundClick = false,
  onBackgroundClick,
}: PopoverProps) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const positionStyle = useMemo(() => {
    return {
      top: anchorPosition?.top ?? "unset",
      right: anchorPosition?.right ?? "unset",
      bottom: anchorPosition?.bottom ?? "unset",
      left: anchorPosition?.left ?? "unset",
    };
  }, [anchorPosition]);
  const handleBackgroundClick = useCallback<(event: MouseEvent) => void>(
    ({ target }) => {
      const isPopover = popoverRef.current?.contains(target as Node);
      const isAnchor = anchorRef?.current?.contains(target as Node);
      if (
        !isPopover &&
        !isAnchor &&
        !disableCloseWithBackgroundClick &&
        isOpen
      ) {
        onBackgroundClick();
      }
    },
    [
      popoverRef,
      anchorRef,
      disableCloseWithBackgroundClick,
      isOpen,
      onBackgroundClick,
    ]
  );
  useBackgroundClick(handleBackgroundClick);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal container={anchorRef?.current}>
      <PopoverStyled ref={popoverRef} style={{ ...positionStyle }}>
        {children}
      </PopoverStyled>
    </Portal>
  );
};

const PopoverStyled = styled.div`
  position: absolute;
  z-index: $z-index-popover;
`;
