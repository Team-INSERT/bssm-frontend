import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import styled, { css } from "styled-components";

interface ImageWithFallbackProps extends ImageProps {
  src: string;
  fallbackSrc: StaticImageData | string;
  alt: string;
  size?: string;
  rounded?: boolean;
  isShouldHide?: boolean;
}

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  size,
  isShouldHide,
  rounded,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = React.useState<StaticImageData | string>(src);

  return (
    <StyledImage
      {...props}
      src={imgSrc}
      alt={alt}
      isshouldhide={isShouldHide}
      onError={() => setImgSrc(fallbackSrc)}
      sizes={size}
      isrounded={rounded}
    />
  );
};

const StyledImage = styled(Image)<{
  isshouldhide?: boolean;
  isrounded?: boolean;
}>`
  height: auto;
  ${({ isshouldhide }) =>
    isshouldhide &&
    css`
      display: none;
    `}
  ${({ isrounded }) =>
    isrounded &&
    css`
      border-radius: 999px;
    `}
`;

export default ImageWithFallback;
