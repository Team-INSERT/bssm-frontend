import React from "react";
import styled from "styled-components";
import Logo from "@/global/assets/svgs/Logo";
import Setting from "@/global/assets/svgs/Setting";
import color from "@/styles/color";
import Link from "next/link";
import useModal from "@/hooks/useModal";
import Navigation from "./Navigation";
import SettingModal from "../Modal/SettingModal";

const Header = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      <Container>
        <Link href="/">
          <Logo width={42} isPointable />
        </Link>
        <Navigation />
        <Setting onClick={() => openModal({ component: <SettingModal /> })} />
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
  z-index: 4;
`;

const Container = styled.header`
  width: 76%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 6%;
`;

export default Header;
