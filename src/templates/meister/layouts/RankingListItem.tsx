import styled from "styled-components";
import { Column, Row } from "@/components/Flex";
import { theme, font, flex } from "@/styles";
import { useSetAtom } from "jotai";
import { studentNumberContext, buttonSwitchContext } from "../context";
import { getStudentId } from "../helpers";

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
  const { grade, classNo, studentNo } = student;
  const setStudentNum = useSetAtom(studentNumberContext);
  const setSwitch = useSetAtom(buttonSwitchContext);

  const handleContainerButtonClick = () => {
    setStudentNum(getStudentId(grade, classNo, studentNo));
    setSwitch(true);
  };

  return (
    <Container onClick={handleContainerButtonClick}>
      <RankText>{index}</RankText>
      <Column>
        <Row alignItems="center" gap="5px">
          <Department>
            {grade >= 2 ? (
              <span>{classNo <= 2 ? "소프트웨어" : "임베디드소프트웨어"}</span>
            ) : (
              "통합"
            )}
            개발과
          </Department>
          <Grade>{grade}학년</Grade>
          <ClassNo>{classNo}반</ClassNo>
          <StudentNo>{studentNo}번</StudentNo>
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
  cursor: pointer;
`;

const RankText = styled.div`
  width: 50px;
  ${flex.CENTER};
  ${font.H2};
`;

const InformationText = styled.span`
  ${font.H6};
  color: ${theme.black};
`;

const Department = styled(InformationText)``;

const Grade = styled(InformationText)``;

const ClassNo = styled(InformationText)``;

const StudentNo = styled(InformationText)``;

const Name = styled(InformationText)``;

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
