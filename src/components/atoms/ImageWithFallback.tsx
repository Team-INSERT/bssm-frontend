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
      size={size}
      onErrorDelete={onErrorDelete}
      onError={() => setImgSrc(fallbackSrc)}
      width={999}
      height={999}
    />
  );
};

const StyledImage = styled(Image)<{ size?: string; onErrorDelete?: boolean }>`
  width: ${({ size }) => size};
  height: auto;
  ${({ onErrorDelete }) =>
    onErrorDelete &&
    css`
      display: none;
    `}
`;

export default ImageWithFallback;
