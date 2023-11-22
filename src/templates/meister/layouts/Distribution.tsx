import styled from "styled-components";
import { DistributionIcon } from "@/assets/icons";
import { Row } from "@/components/Flex";
import { theme, font } from "@/styles";
import flex from "@/styles/flex";
import RadarChart from "../chart/RadarChart";
import { Meister } from "../types";

const spiderChartValue = [
  { name: "내 점수", color: theme.spider_first },
  { name: "학년 평균", color: theme.spider_second },
];

const Distribution = ({ ...meisterData }: Meister) => {
  return (
    <Container>
      <Row alignItems="center" gap="4px">
        <DistributionIcon />
        <TitleText>영역별 점수 분포도</TitleText>
      </Row>
      <RadarBox>
        <RadarChart {...meisterData} />
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
  background-color: ${theme.white};
  padding: 12px;
  ${flex.COLUMN_FLEX};
  justify-content: space-between;
`;

const TitleText = styled.span`
  ${font.H6};
  color: ${theme.black};
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
  color: ${theme.gray};
`;

export default Distribution;
