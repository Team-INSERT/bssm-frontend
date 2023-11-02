import React from "react";
import styled from "styled-components";
import { Aside } from "@/components/common";
import { flex } from "@/styles";
import { getMealName } from "@/helpers";
import { Column, Row } from "@/components/Flex";
import useMeal from "@/hooks/useMeal";
import { useMainQuery } from "./services/query.service";
import HomeMeal from "./layouts/HomeMeal";
import HomeReserve from "./layouts/HomeReserve";
import HomeMainBanner from "./layouts/HomeMainBanner";
import HomeCalender from "./layouts/HomeCalender";
import HomePost from "./layouts/HomePost";
import HomeRadarChart from "./layouts/HomeRadarChart";

const HomePage = () => {
  const { isSuccess, data } = useMainQuery();
  const { getMealTime } = useMeal();

  return (
    <Layout>
      {isSuccess && (
        <Container>
          <Row gap="8px" width="100%">
            <HomeMeal
              {...data.meal.data[getMealTime()]}
              name={getMealName(getMealTime())}
            />
            <HomeReserve />
            <Aside />
          </Row>
          <Row gap="8px" width="100%">
            <Column gap="8px" width="100%">
              <HomeMainBanner href="/post" />
              <Row gap="8px" width="100%">
                <HomeCalender {...data.calender} />
                <HomePost notice={data.notice} common={data.common} />
              </Row>
            </Column>
            <Column gap="8px">
              <HomeMiniBanner href="https://buma.wiki" />
              <HomeBamboo {...data.bamboo} />
            </Column>
          </Row>
        </Container>
      )}
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
  ${flex.COLUMN};
  gap: 8px;
`;

export default HomePage;
