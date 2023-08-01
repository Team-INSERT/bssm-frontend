import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import styled, { css } from "styled-components";

interface ImageWithFallbackProps extends ImageProps {
  src: string;
  fallbackSrc: StaticImageData | string;
  alt: string;
  size?: string;
  isShouldHide?: boolean;
}

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  size,
  isShouldHide,
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
      width={0}
      height={0}
      sizes={size}
    />
  );
};

const StyledImage = styled(Image)<{ isShouldHide?: boolean }>`
  height: auto;
  ${({ isShouldHide }) =>
    isShouldHide &&
    css`
      display: none;
    `}
`;

export default ImageWithFallback;
