import { HistorySeparator } from "@/assets/icons";
import { Column, Row } from "@/components/Flex";
import { color, font } from "@/styles";
import flex from "@/styles/flex";
import React from "react";
import styled from "styled-components";

const CreditDemeritCard = () => {
  return (
    <Container>
      <Title>상벌점 내역</Title>
      {Array.from({ length: 2 }).map((_, i) => (
        <Row gap="10px" key={i}>
          <HistorySeparatorBox>
            <Column height="100%" alignItems="center" gap="3px">
              <HistorySeparator />
              <HistorySeparatorLine />
            </Column>
          </HistorySeparatorBox>
          <Column width="100%" gap="8px">
            <HistorySeparatorDate>2022년 7월</HistorySeparatorDate>
            {Array.from({ length: 2 }).map((__, idx) => (
              <HistoryBox key={idx}>
                <HistoryName>
                  {!(idx % 2) ? "타호실 취침" : "교내 면학 환경 조성"}
                </HistoryName>
                <Row alignItems="center" gap="4px">
                  <StatusCircle type={!(idx % 2) ? "demerit" : "credit"} />
                  <HistoryDate>2022.07.06</HistoryDate>
                  <HistoryScore>5</HistoryScore>
                  <HisotryTeacher>홍길동</HisotryTeacher>
                </Row>
              </HistoryBox>
            ))}
          </Column>
        </Row>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 14px 20px;
  background-color: ${color.white};
  ${flex.COLUMN};
  gap: 12px;
`;

const Title = styled.span`
  ${font.H6};
`;

const HistorySeparatorBox = styled.div``;

const HistorySeparatorLine = styled.div`
  width: 2px;
  height: 100%;
  border-radius: 2px;
  background-color: ${color.on_tertiary};
`;

const HistorySeparatorDate = styled.span`
  ${font.p4};
  color: ${color.gray};
`;

const HistoryBox = styled.div`
  width: 100%;
  background-color: ${color.white};
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  padding: 10px 14px;
  ${flex.COLUMN}
`;

const HistoryName = styled.span`
  ${font.p3};
  font-weight: 500;
`;

const HistorySubText = styled.span`
  ${font.caption};
  color: ${color.content};
`;

const HistoryDate = styled(HistorySubText)``;

const HistoryScore = styled(HistorySubText)`
  &:before {
    content: " · ";
  }

  &:after {
    content: "점";
  }
`;

const HisotryTeacher = styled(HistoryScore)`
  &:after {
    content: " 선생님";
  }
`;

const StatusCircle = styled.div<{ type: "credit" | "demerit" }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ type }) =>
    type === "credit" ? color.green : color.red};
`;

export default CreditDemeritCard;
