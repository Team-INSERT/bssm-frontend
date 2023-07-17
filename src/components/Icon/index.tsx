import Image, { StaticImageData } from "next/image";
import React from "react";
import styled from "styled-components";

interface IIcon {
  src: string | StaticImageData;
  alt: string;
  width: number | undefined;
  height: number | undefined;
}

const Icon = (settings: IIcon) => {
  return <StyledImage {...settings} />;
};

const StyledImage = styled(Image)`
  cursor: pointer;
`;

export default Icon;
