import Image from "next/image";
import React from "react";
import Emoticon from "@/global/assets/icons/emoticon.png";
import styled, { css } from "styled-components";

interface IEmojiProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
  isPointable: boolean;
}

const Emoji = ({ isPointable = false, ...props }: IEmojiProps) => {
  return (
    <StyledImage
      {...props}
      src={Emoticon}
      alt="emoji"
      isPointable={isPointable}
    />
  );
};

const StyledImage = styled(Image)<{ isPointable: boolean }>`
  ${({ isPointable }) =>
    isPointable &&
    css`
      cursor: pointer;
    `}
`;

export default Emoji;
