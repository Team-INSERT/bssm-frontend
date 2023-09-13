import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import styled, { css } from "styled-components";

interface ImageWithFallbackProps extends ImageProps {
  src: string;
  fallbackSrc: StaticImageData | string;
  alt: string;
  sizes?: string;
  rounded?: boolean;
  isShouldHide?: boolean;
}

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  sizes,
  isShouldHide,
  rounded,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = React.useState<StaticImageData | string>(src);

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

const StyledImage = styled(Image)<{
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

export default ImageWithFallback;
