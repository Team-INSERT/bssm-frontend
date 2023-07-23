import Aside from "@/components/common/Aside";
import React from "react";
import styled from "styled-components";
import Meal from "./layouts/Meal";

const MealPage = () => {
  return (
    <Layout>
      <Container>
        <Meal />
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
  display: flex;
`;

export default MealPage;
