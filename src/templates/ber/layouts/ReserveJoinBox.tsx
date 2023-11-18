import { Column } from "@/components/Flex";
import { Input } from "@/components/atoms";
import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { BerReserveJoinBoxProps } from "../interfaces";
import { useBerReserve } from "../hooks";
import ReserveNoticeRuleList from "./ReserveNoticeRuleList";
import ReserveStudentList from "./ReserveStudentList";
import ReserveCheckBox from "./ReserveCheckBox";

const ReserveJoinBox = ({
  date,
  currentRoom,
  setCurrentRoom,
}: BerReserveJoinBoxProps) => {
  const {
    isAgreeRule,
    studentList,
    studentInput,
    setStudentInput,
    handleChangeIsAgreeClick,
    handleStudentDeleteClick,
    handleStudentInputChange,
    handleCreateReserveClick,
  } = useBerReserve({
    date,
    currentRoom,
    setCurrentRoom,
  });

  return (
    <Container>
      <ReserveTitleText>
        {currentRoom ? `베르 ${currentRoom}실` : "베르실을 선택하세요"}
      </ReserveTitleText>
      <Column gap="16px">
        <Input
          label="팀원 학번/이름 입력"
          value={studentInput}
          onChange={(e) => setStudentInput(e.target.value)}
          onKeyUp={handleStudentInputChange}
          placeholder="ex) 2210 박우빈"
        />
        <InfomationText>
          본인을 제외한 사용하는 모든 학생을 추가해주세요. 엔터 키를 눌러 추가할
          수 있어요.
        </InfomationText>
        <ReserveStudentList
          studentList={studentList}
          handleClick={handleStudentDeleteClick}
        />
        <ReserveNoticeRuleList />
        <ReserveCheckBox
          isAgreeRule={isAgreeRule}
          handleClick={handleChangeIsAgreeClick}
        />
        <SubmitButton onClick={handleCreateReserveClick}>신청하기</SubmitButton>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  background-color: ${color.white};
  gap: 8px;
`;

const InfomationText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const SubmitButton = styled.button`
  width: fit-content;
  padding: 6px 14px;
  background-color: ${color.primary_blue};
  color: ${color.white};
  border-radius: 4px;
`;

const ReserveTitleText = styled.span`
  ${font.p1};
  font-weight: 600;
`;

export default ReserveJoinBox;
