import Aside from "@/components/common/Aside";
import React from "react";
import styled from "styled-components";
import TimeTableBox from "./layouts/TimeTableBox";

const TimeTablePage = () => {
  return (
    <Layout>
      <Container>
        <TimeTableBox />
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
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export default TimeTablePage;
