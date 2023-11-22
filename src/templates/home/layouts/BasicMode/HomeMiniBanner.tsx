import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { theme } from "@/styles";
import { defaultBannerData } from "../../assets/data";

const HomeMiniBanner = () => {
  return (
    <Layout>
      <Container href={defaultBannerData[0].href}>
        <StyledBanner src={defaultBannerData[0].src} alt="small banner" />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 20vw;
  height: 180px;
`;

const Container = styled(Link)`
  width: 100%;
  height: 150px;
  background-color: ${theme.white};
`;

const StyledBanner = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export default HomeMiniBanner;
