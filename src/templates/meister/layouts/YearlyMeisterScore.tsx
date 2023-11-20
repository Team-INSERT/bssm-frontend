import GraphIcon from "@/assets/icons/GraphIcon";
import { Row } from "@/components/Flex";
import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { getStatusColor } from "@/helpers";
import MeisterChart from "../chart/MeisterChart";
import { Meister } from "../interfaces";

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
            <StatusCircle statuscolor={getStatusColor(index)} />
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
`;

const StatusBox = styled.div`
  margin-left: 2vw;
  display: flex;
  gap: 16px;
`;

const StatusCircle = styled.div<{ statuscolor: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ statuscolor }) => statuscolor};
`;

const StatusText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default YearlyMeisterScore;
