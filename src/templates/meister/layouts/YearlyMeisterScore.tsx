import styled from "styled-components";
import { GraphIcon } from "@/assets/icons";
import { Row } from "@/components/Flex";
import { theme, font } from "@/styles";
import MeisterChart from "../chart/MeisterChart";
import { Meister } from "../types";
import { getStatusColor } from "../helpers";

const YearlyMeisterScore = ({ ...meisterData }: Meister) => {
  return (
    <Container>
      <Row alignItems="center" gap="8px">
        <GraphIcon />
        <TitleText>연도별 점수 그래프</TitleText>
      </Row>
      <MeisterChart {...meisterData} />
      <StatusBox>
        {["학년 평균", "내 점수", "최고 점수"].map((year, index) => (
          <Row key={year} alignItems="center" gap="4px">
            <StatusCircle statusColor={getStatusColor(index)} />
            <StatusText>{year}</StatusText>
          </Row>
        ))}
      </StatusBox>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  height: 46vh;
  background-color: ${theme.white};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

const TitleText = styled.span`
  ${font.H6};
  color: ${theme.black};
`;

const StatusBox = styled.div`
  margin-left: 2vw;
  display: flex;
  gap: 16px;
`;

const StatusCircle = styled.div<{ statusColor: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ statusColor }) => statusColor};
`;

const StatusText = styled.span`
  ${font.p3};
  color: ${theme.gray};
`;

export default YearlyMeisterScore;
