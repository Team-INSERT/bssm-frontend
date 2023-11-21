import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { defaultBannerData } from "@/templates/calendar/assets/data";
import Link from "next/link";
import { color } from "@/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomeMiniBanner = () => {
  return (
    <Layout>
      <Carousel showArrows={false} autoPlay infiniteLoop showThumbs={false}>
        {defaultBannerData.map((banner) => (
          <Container href={banner.href}>
            <StyledBanner src={banner.src} alt="small banner" />
          </Container>
        ))}
      </Carousel>
    </Layout>
  );
};

const Layout = styled.div`
  width: 20vw;
  height: 210px;
`;

const Container = styled(Link)`
  width: 100%;
  height: 150px;
  background-color: ${color.white};
`;

const StyledBanner = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export default HomeMiniBanner;
