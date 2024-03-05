import React from "react";
import Image, { ImageProps, StaticImageData } from "next/image";
import styled, { css } from "styled-components";

interface FallbackImgImageProps extends ImageProps {
  fallbackSrc: string | StaticImageData;
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
  const [isError, setIsError] = React.useState(false);

  return isError ? (
    <StyledImage
      src={src}
      {...props}
      alt={alt}
      isshouldhide={isShouldHide}
      onError={() => setIsError(true)}
      isrounded={rounded?.toString()}
    />
  ) : (
    <StyledFallbackImage
      src={fallbackSrc}
      {...props}
      alt={alt}
      isshouldhide={isShouldHide}
      onError={() => setIsError(true)}
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

const StyledFallbackImage = styled(Image)<{
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
