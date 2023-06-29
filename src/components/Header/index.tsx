import Image from "next/image";
import React from "react";
import styled from "styled-components";
import LogoImage from "@/assets/logo.svg";
import color from "@/styles/color";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Layout>
      <Container>
        <Logo src={LogoImage} alt="logo" />
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

const Logo = styled(Image)`
  width: 42px;
  height: auto;
`;

export default Header;
