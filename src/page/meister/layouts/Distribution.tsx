import DistributionIcon from "@/assets/icons/DistributionIcon";
import { Row } from "@/components/Flex";
import { color, font } from "@/styles";
import flex from "@/styles/flex";
import React from "react";
import styled from "styled-components";
import RadarChart from "../chart/RadarChart";

const spiderChartValue = [
  { name: "내 점수", color: color.spider_first },
  { name: "학년 평균", color: color.spider_second },
];

const Distribution = () => {
  return (
    <Container>
      <Row alignItems="center" gap="4px">
        <DistributionIcon />
        <TitleText />
      </Row>
      <RadarBox>
        <RadarChart />
      </RadarBox>
      <StatusBox>
        {spiderChartValue.map((chart) => (
          <Row key={chart.name} gap="4px" alignItems="center">
            <StatusIcon statusColor={chart.color} />
            <StatusText>{chart.name}</StatusText>
          </Row>
        ))}
      </StatusBox>
    </Container>
  );
};

const Container = styled.div`
  width: 22vw;
  height: 46vh;
  background-color: ${color.white};
  padding: 12px;
  ${flex.COLUMN};
  justify-content: space-between;
`;

const TitleText = styled.span`
  ${font.H6};
  color: ${color.black};

  &:after {
    content: "영역별 점수 분포도";
  }
`;

const RadarBox = styled.div`
  height: 80%;
`;

const StatusBox = styled.div`
  margin-left: 6px;
  ${flex.HORIZONTAL};
  gap: 12px;
`;

const StatusIcon = styled.div<{ statusColor: string }>`
  width: 12px;
  height: 12px;
  background-color: ${({ statusColor }) => statusColor};
`;

const StatusText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default Distribution;
