import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  width,
  height,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<StaticImageData | string>(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      width={width}
      height={height}
    />
  );
};

export default ImageWithFallback;
