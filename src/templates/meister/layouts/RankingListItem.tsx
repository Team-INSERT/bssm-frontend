import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { theme, font, flex } from "@/styles";

interface MeisterProfileBoxProps {
  score: number;
  positivePoint: number;
  negativePoint: number;
  index: number;
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
  index,
}: MeisterProfileBoxProps) => {
  return (
    <Container>
      <RankText>{index}</RankText>
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
            개발과
          </Department>
          <Grade>{student.grade}학년</Grade>
          <ClassNo>{student.classNo}반</ClassNo>
          <StudentNo>{student.studentNo}번</StudentNo>
          <Name>{student.name}</Name>
        </Row>
        <MeisterPoint>마이스터역량인증제 점수 ㆍ {score}점</MeisterPoint>
        <Row alignItems="center" gap="8px">
          <CreditPoint>상점 ㆍ {positivePoint}점</CreditPoint>
          <Separator />
          <DemeritPoint>벌점 ㆍ {negativePoint}점</DemeritPoint>
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 14px 24px;
  background-color: ${theme.white};
  display: flex;
  align-items: center;
  gap: 18px;
`;

const RankText = styled.div`
  width: 50px;
  ${flex.CENTER};
  ${font.H2};
`;

const InfomationText = styled.span`
  ${font.H6};
  color: ${theme.black};
`;

const Department = styled(InfomationText)``;

const Grade = styled(InfomationText)``;

const ClassNo = styled(InfomationText)``;

const StudentNo = styled(InfomationText)``;

const Name = styled(InfomationText)``;

const RewardPointText = styled.span`
  ${font.p3};
  line-height: 130%;
  color: ${theme.gray};
`;

const MeisterPoint = styled(RewardPointText)``;

const CreditPoint = styled(RewardPointText)``;

const Separator = styled.div`
  width: 1.5px;
  background-color: ${theme.on_tertiary};
  height: 12px;
`;

const DemeritPoint = styled(RewardPointText)``;

export default RankingListItem;
