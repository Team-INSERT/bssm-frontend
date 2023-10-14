import React from "react";
import styled from "styled-components";
import { Aside } from "@/components/common";
import { flex } from "@/styles";
import { Column, Row } from "@/components/Flex";
import { useMainQuery } from "./services/query.service";
import HomeMeal from "./layouts/HomeMeal";
import HomeReserve from "./layouts/HomeReserve";
import HomeMainBanner from "./layouts/HomeMainBanner";
import HomeCalender from "./layouts/HomeCalender";
import HomePost from "./layouts/HomePost";
import HomeRadarChart from "./layouts/HomeRadarChart";
import HomeBamboo from "./layouts/HomeBamboo";
import HomeMiniBanner from "./layouts/HomeMiniBanner";

const HomePage = () => {
  const { data } = useMainQuery();

  React.useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <Layout>
      <Container>
        <Row gap="8px" width="100%">
          <HomeMeal />
          <HomeReserve />
          <Aside />
        </Row>
        <Row gap="8px" width="100%">
          <Column gap="8px" width="100%">
            <HomeMainBanner href="/post" />
            <Row gap="8px" width="100%">
              <HomeCalender />
              <HomePost />
            </Row>
          </Column>
          <HomeRadarChart />
        </Row>
        <Row gap="8px" width="100%">
          <HomeBamboo />
          <HomeMiniBanner href="https://buma.wiki" />
        </Row>
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
  ${flex.COLUMN};
  gap: 8px;
`;

export default HomePage;
