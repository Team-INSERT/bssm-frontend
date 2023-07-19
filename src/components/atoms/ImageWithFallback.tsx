import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import styled, { css } from "styled-components";

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: StaticImageData | string;
  alt: string;
  size?: string;
  onErrorDelete?: boolean;
}

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  size,
  onErrorDelete,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<StaticImageData | string>(src);

  return (
    <StyledImage
      src={imgSrc}
      alt={alt}
      onErrorDelete={onErrorDelete}
      onError={() => setImgSrc(fallbackSrc)}
      width={0}
      height={0}
      sizes={size}
    />
  );
};

const StyledImage = styled(Image)<{ onErrorDelete?: boolean }>`
  height: auto;
  ${({ onErrorDelete }) =>
    onErrorDelete &&
    css`
      display: none;
    `}
`;

export default ImageWithFallback;
