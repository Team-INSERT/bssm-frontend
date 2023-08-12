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
      isShouldHide={isShouldHide}
      onError={() => setImgSrc(fallbackSrc)}
      sizes={size}
      rounded={rounded}
    />
  );
};

const StyledImage = styled(Image)<{ isShouldHide?: boolean; rounded?: boolean }>`
  height: auto;
  ${({ isShouldHide }) =>
    isShouldHide &&
    css`
      display: none;
    `}
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
      object-fit: cover;
    `}
`;

export default ImageWithFallback;
