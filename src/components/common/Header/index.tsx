import React from "react";
import styled from "styled-components";
import { color, flex } from "@/styles";
import { Logo, Setting } from "@/assets/icons";
import useModal from "@/hooks/useModal";
import { SettingModal } from "@/components/common";
import Navigation from "./Navigation";

const Header = () => {
  const { openModal } = useModal();

  return (
    <Layout>
      <Logo width={42} />
      <Navigation />
      <Setting onClick={() => openModal({ component: <SettingModal /> })} />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 70px;
  ${flex.HORIZONTAL};
  gap: 6%;
  background-color: ${color.white};
  border-bottom: 0.5px solid ${color.on_tertiary};
  padding: 0 8vw;
`;

export default Header;
