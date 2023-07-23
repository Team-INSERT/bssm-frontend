import React from "react";
import styled from "styled-components";
import Logo from "@/global/assets/svgs/Logo";
import color from "@/styles/color";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Layout>
      <Container>
        <Link href="/">
          <Logo width={42} isPointable />
        </Link>
        <Navigation />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.on_tertiary};
`;

const Container = styled.header`
  width: 76%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 6%;
`;

export default Header;
