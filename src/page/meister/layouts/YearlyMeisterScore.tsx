import GraphIcon from "@/assets/icons/GraphIcon";
import useDate from "@/hooks/useDate";
import { Row } from "@/components/Flex";
import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { getStatusColor } from "@/helpers";
import MeisterChart from "../chart/MeisterChart";

const YearlyMeisterScore = () => {
  const { currentYearsWithSchool } = useDate();

  return (
    <Container>
      <Row alignItems="center" gap="8px">
        <GraphIcon />
        <TitleText />
      </Row>
      <MeisterChart />
      <StatusBox>
        {currentYearsWithSchool.map((year, index) => (
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
  background-color: ${color.white};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
`;

const TitleText = styled.span`
  ${font.H6};
  color: ${color.black};

  &:after {
    content: "연도별 점수 그래프";
  }
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
  color: ${color.gray};
`;

export default YearlyMeisterScore;
