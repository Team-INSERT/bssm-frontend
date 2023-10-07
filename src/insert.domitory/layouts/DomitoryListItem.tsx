import { Row } from "@/_components/Flex";
import { color, font } from "@/_styles";
import React from "react";
import styled from "styled-components";

const DomitoryListItem = () => {
  return (
    <Container>
      <Row gap="8px">
        <Title>박우빈</Title>
        <Row alignItems="center" gap="4px">
          <GradeText>2</GradeText>
          <ClassText>2</ClassText>
          <StudentNumberText>10</StudentNumberText>
        </Row>
      </Row>
      <Row width="100%" gap="4px">
        <JoinDateText>오후 8시 22분</JoinDateText>
        <JoinDateDay>2023.08.22.</JoinDateDay>
        <StatusCircle />
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 12px 16px;
  background-color: ${color.white};
`;

const Title = styled.div`
  ${font.H5};
`;

const SubTitleText = styled.span`
  ${font.p3};
`;

const GradeText = styled(SubTitleText)`
  &:after {
    content: "학년";
  }
`;

const ClassText = styled(SubTitleText)`
  &:after {
    content: "반";
  }
`;

const StudentNumberText = styled(SubTitleText)`
  &:after {
    content: "번";
  }
`;

const JoinDateText = styled(SubTitleText)`
  &:after {
    content: " 입사 완료";
  }
`;

const JoinDateDay = styled(SubTitleText)`
  color: ${color.content};
  &:before {
    content: " ˑ ";
  }
`;

const StatusCircle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: auto 0 0 auto;
  background-color: ${color.green};
`;

export default DomitoryListItem;
