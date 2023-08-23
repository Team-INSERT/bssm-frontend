import flex from "@/styles/flex";
import { Row } from "@/components/Flex";
import { color } from "@/styles";
import React from "react";
import styled from "styled-components";
import MeisterProfileBox from "./layouts/MeisterProfileBox";
import YearlyMeisterScore from "./layouts/YearlyMeisterScore";
import Distribution from "./layouts/Distribution";
import StatusCard from "./layouts/StatusCard";
import HistoryCard from "./layouts/HistoryCard";
import CreditDemeritCard from "./layouts/CreditDemeritCard";

const meisterData = [
  { name: "외국어 능력", score: 25, color: color.primary_blue },
  { name: "인성 직업 의식", score: 12, color: color.primary_mint },
  { name: "전문 기술 역량", score: 28, color: color.primary_red },
  { name: "인문학적 소양", score: 42, color: color.primary_yellow },
];

const MeisterPage = () => {
  return (
    <Layout>
      <Container>
        <MeisterProfileBox />
        <Row width="100%" justifyContent="space-between">
          <YearlyMeisterScore />
          <Distribution />
        </Row>
        <StatusCardBox>
          {meisterData.map((meister) => (
            <StatusCard
              key={meister.name}
              chapter={meister.name}
              score={meister.score}
              statusColor={meister.color}
            />
          ))}
        </StatusCardBox>
        {Array.from({ length: 2 }).map((_, i) => (
          <HistoryCard key={i} />
        ))}
        <CreditDemeritCard />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.CENTER};
`;

const Container = styled.div`
  width: 76%;
  ${flex.COLUMN_CENTER};
  gap: 18px;
`;

const StatusCardBox = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export default MeisterPage;
