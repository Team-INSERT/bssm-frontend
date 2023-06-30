import Aside from "@/components/Aside";
import color from "@/styles/color";
import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Aside />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 76%;
  height: 100vh;
`;

export default HomePage;
