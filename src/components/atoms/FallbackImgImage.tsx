import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import styled, { css } from "styled-components";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FallbackImgImageProps extends ImageProps {
  fallbackSrc: StaticImageData | string;
  alt: string;
  sizes?: string;
  rounded?: boolean;
  isShouldHide?: boolean;
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
  const [imgSrc, setImgSrc] = React.useState<
    StaticImageData | StaticImport | string
  >("");

  React.useEffect(() => {
    setImgSrc(src ?? "/");
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
