import { TestSmallBanner } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface IHomeMiniBanner {
  href: string;
}

const HomeMiniBanner = ({ href }: IHomeMiniBanner) => {
  return (
    <Container href={href || "/"} target="_blank">
      <StyledBanner src={TestSmallBanner} alt="small banner" />
    </Container>
  );
};

const Container = styled(Link)`
  width: 20vw;
  height: 100%;
`;

const StyledBanner = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export default HomeMiniBanner;
