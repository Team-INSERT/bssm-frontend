import React from "react";
import { ImageProps } from "next/image";
import styled, { css } from "styled-components";

interface FallbackImgImageProps extends ImageProps {
  fallbackSrc: string;
  alt: string;
  sizes?: string;
  rounded?: boolean;
  isShouldHide?: boolean;
  src: string;
}

const FallbackImgImage = ({
  src,
  fallbackSrc,
  alt,
  sizes,
  isShouldHide,
  rounded,
  ...props
}: FallbackImgImageProps) => {
  const [imgSrc, setImgSrc] = React.useState<string>("");

  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <StyledImage
      src={imgSrc}
      {...props}
      alt={alt}
      isshouldhide={isShouldHide}
      onError={() => setImgSrc(fallbackSrc)}
      isrounded={rounded?.toString()}
    />
  );
};

const StyledImage = styled.img<{
  isshouldhide?: boolean;
  isrounded?: string;
}>`
  height: auto;
  ${({ isshouldhide }) =>
    isshouldhide &&
    css`
      display: none;
    `}
  ${({ isrounded }) =>
    isrounded === "true" &&
    css`
      border-radius: 50%;
    `}
`;

export default FallbackImgImage;
