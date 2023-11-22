import React from "react";
import styled from "styled-components";
import { theme, flex } from "@/styles";
import { Logo, Setting } from "@/assets/icons";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <Layout>
      <Logo width={42} />
      <Navigation />
      <Setting />
    </Layout>
  );
};

const Layout = styled.div`
  ${flex.VERTICAL};
  width: 100%;
  height: 70px;
  gap: 6%;
  background-color: ${theme.white};
  border-bottom: 0.5px solid ${theme.on_tertiary};
  padding: 0 8vw;
`;

export default Header;
