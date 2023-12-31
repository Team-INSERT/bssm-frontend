import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";
import { TestBanner } from "@/assets/images";

interface HomeMainBannerProps {
  href?: string;
}

const HomeMainBanner = ({ href }: HomeMainBannerProps) => {
  const router = useRouter();

  return (
    <Container>
      <StyledBanner
        onClick={() => router.push(href || "")}
        src={TestBanner}
        alt="banner"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 5.5vw;
`;

const StyledBanner = styled(Image)`
  width: 100%;
  height: fit-content;
  overflow: hidden;
  cursor: pointer;
`;

export default HomeMainBanner;
