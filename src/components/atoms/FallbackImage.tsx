import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import styled, { css } from "styled-components";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface FallbackImageProps extends ImageProps {
  fallbackSrc: StaticImageData | string;
  alt: string;
  sizes?: string;
  rounded?: boolean;
  isShouldHide?: boolean;
}

const FallbackImage = ({
  src,
  fallbackSrc,
  alt,
  sizes,
  isShouldHide,
  rounded,
  ...props
}: FallbackImageProps) => {
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

export default FallbackImage;
