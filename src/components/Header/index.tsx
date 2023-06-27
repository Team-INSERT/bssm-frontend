import Image from "next/image";
import React from "react";
import styled from "styled-components";
import LogoImage from "@/assets/logo.svg";
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
  width: 100vw;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
`;

const Container = styled.div`
  width: 76vw;
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
