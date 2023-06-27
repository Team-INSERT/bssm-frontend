import React from "react";
import styled from "styled-components";
import color from "@/styles/color";
import Info from "./Info";

const Footer = () => {
  return (
    <Layout>
      <Container>
        <Info />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 400px;
  bottom: 0;
  color: ${color.content};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.tertiary};
`;

const Container = styled.div`
  width: 76vw;
  height: 60%;
`;

export default Footer;
