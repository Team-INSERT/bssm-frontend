import { Column, Row } from "@/_components/Flex";
import { color, font } from "@/_styles";
import React from "react";
import styled from "styled-components";

interface IMeisterProfileBoxProps {
  score: number;
  positivePoint: number;
  negativePoint: number;
  student: {
    grade: number;
    classNo: number;
    studentNo: number;
    name: string;
  };
}

const RankingListItem = ({
  score,
  student,
  positivePoint,
  negativePoint,
}: IMeisterProfileBoxProps) => {
  return (
    <Container>
      <Column>
        <Row alignItems="center" gap="5px">
          <Department>
            {student.grade >= 2 ? (
              <span>
                {student.classNo <= 2 ? "소프트웨어" : "임베디드소프트웨어"}
              </span>
            ) : (
              "통합"
            )}
          </Department>
          <Grade>{student.grade}</Grade>
          <ClassNo>{student.classNo}</ClassNo>
          <StudentNo>{student.studentNo}</StudentNo>
          <Name>{student.name}</Name>
        </Row>
        <MeisterPoint>{score}</MeisterPoint>
        <Row alignItems="center" gap="8px">
          <CreditPoint>{positivePoint}</CreditPoint>
          <Separator />
          <DemeritPoint>{negativePoint}</DemeritPoint>
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 14px 24px;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  gap: 18px;
`;

const InfomationText = styled.span`
  ${font.H6};
  color: ${color.black};
`;

const Department = styled(InfomationText)`
  &:after {
    content: "개발과";
  }
`;

const Grade = styled(InfomationText)`
  &:after {
    content: "학년";
  }
`;

const ClassNo = styled(InfomationText)`
  &:after {
    content: "반";
  }
`;

const StudentNo = styled(InfomationText)`
  &:after {
    content: "번";
  }
`;

const Name = styled(InfomationText)``;

const RewardPointText = styled.span`
  ${font.p3};
  line-height: 130%;
  color: ${color.gray};

  &:after {
    content: "점";
  }
`;

const MeisterPoint = styled(RewardPointText)`
  &:before {
    content: "마이스터역량인증제 점수 ㆍ ";
  }
`;

const CreditPoint = styled(RewardPointText)`
  &:before {
    content: "상점 ㆍ ";
  }
`;

const Separator = styled.div`
  width: 1.5px;
  background-color: ${color.on_tertiary};
  height: 12px;
`;

const DemeritPoint = styled(RewardPointText)`
  &:before {
    content: "벌점 ㆍ ";
  }
`;

export default RankingListItem;
