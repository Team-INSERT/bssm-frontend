import { XIcon } from "@/assets/icons";
import CheckIcon from "@/assets/icons/CheckIcon";
import { Column, Row } from "@/components/Flex";
import { roomStore } from "@/store/room.store";
import { color, flex, font } from "@/styles";
import React from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { useCreateReserveMutation } from "../services/mutation.service";

const noticeTexts = [
  "1. 사용 가능 시간은 9시 10분부터 10시 20분까지입니다.",
  "2. 너무 시끄럽게 떠들 경우 퇴실처리될 수 있습니다.",
  "3. 퇴실시, 소지품을 잘 챙기고 정리정돈 및 청소를 하고 나와야 합니다.",
  "4. 예약 후 노쇼나, 위의 사항들을 어길 경우 페널티가 발생할 수 있습니다.",
];

interface IReserveJoinBoxProps {
  date: string;
}

const ReserveJoinBox = ({ date }: IReserveJoinBoxProps) => {
  const [room, setRoom] = useRecoilState(roomStore);
  const [inputStudent, setInputStudent] = React.useState<string>("");
  const [students, setStudents] = React.useState<Array<string>>([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const { mutate } = useCreateReserveMutation();

  const handleStudentInputChange = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      setInputStudent("");
      if (!inputStudent.replace(/ /gi, "")) return;
      if (students.includes(inputStudent)) return;
      setStudents(students.concat(inputStudent));
    }
  };

  const handleStudentDeleteClick = (student: string) => {
    setStudents(students.filter((x) => x !== student));
  };

  const handleCreateReserveClick = () => {
    if (!room) return toast.error("베르실을 선택해주세요.");
    if (!isChecked) return toast.error("숙지 사항에 동의해주세요.");

    mutate({
      berNumber: room,
      reservationTime: date,
      reservationUsersName: students.join(", "),
    });
    setStudents([]);
    setRoom(0);
  };

  return (
    <Container>
      <Column gap="6px">
        <ReserveSelectTitle>선택된 베르실</ReserveSelectTitle>
        <StyledTitle>{!room ? `선택하세요` : `베르 ${room}실`}</StyledTitle>
      </Column>
      <Column gap="16px">
        <ReserveSelectTitle>팀원 학번/이름 입력</ReserveSelectTitle>
        <Row alignItems="center" gap="12px">
          <StyledInput
            value={inputStudent}
            onChange={(e) => setInputStudent(e.target.value)}
            onKeyUp={handleStudentInputChange}
            placeholder="ex) 2210 박우빈"
          />
          <InfomationText />
        </Row>
        <StudentList>
          {students.map((student) => (
            <StudentListItem
              key={student}
              onClick={() => handleStudentDeleteClick(student)}
            >
              {student}
              <XIcon width={8} height={8} />
            </StudentListItem>
          ))}
        </StudentList>
        <Column gap="6px">
          <ReserveSelectTitle>숙지 사항</ReserveSelectTitle>
          <NoticeTextList>
            {noticeTexts.map((noticeText) => (
              <NoticeTextListItem key={noticeText}>
                {noticeText}
              </NoticeTextListItem>
            ))}
          </NoticeTextList>
        </Column>
        <CheckBox onClick={() => setIsChecked(!isChecked)}>
          <NoticeCheckText />
          <CheckButton isChecked={isChecked}>
            {isChecked && <CheckIcon />}
          </CheckButton>
        </CheckBox>
        <SubmitButton onClick={handleCreateReserveClick} />
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
  gap: 24px;
`;

const ReserveSelectTitle = styled.span`
  ${font.btn3};
`;

const StyledInput = styled.input`
  width: 20%;
  padding: 6px 0 6px 14px;
  height: 100%;
  background-color: ${color.white};
  box-shadow: 4px 4px 10px 0 rgba(144, 144, 144, 0.15);

  &::placeholder {
    color: ${color.content};
  }
`;

const InfomationText = styled.span`
  ${font.p3};
  color: ${color.gray};

  &:after {
    content: "본인을 제외한 사용하는 모든 학생을 추가해주세요. 엔터 키를 눌러 추가할 수 있어요.";
  }
`;

const StudentList = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  gap: 12px;
`;

const StudentListItem = styled.div`
  padding: 4px 12px;
  ${font.p4};
  background-color: ${color.white};
  border-radius: 999px;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.15);
  ${flex.CENTER};
  gap: 8px;
  cursor: pointer;
`;

const NoticeTextList = styled.ul`
  ${flex.COLUMN};
  gap: 4px;
  list-style: decimal;
`;

const NoticeTextListItem = styled.li`
  ${font.p2};
  color: ${color.gray};
  font-weight: 500;
`;

const CheckBox = styled.div`
  width: fit-content;
  ${flex.HORIZONTAL};
  gap: 8px;
  cursor: pointer;
`;

const NoticeCheckText = styled.span`
  ${font.context};

  &:after {
    content: "위 내용을 전부 숙지하였으며, 이에 동의합니다.";
  }
`;

const CheckButton = styled.button<{ isChecked: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: ${color.primary_blue};
          border: none;
        `
      : css`
          border: 1.5px solid ${color.black};
        `};
`;

const SubmitButton = styled.button`
  width: fit-content;
  padding: 6px 14px;
  background-color: ${color.primary_blue};
  color: ${color.white};
  border-radius: 4px;

  &:after {
    content: "신청하기";
  }
`;

const StyledTitle = styled.span`
  ${font.p1};
  font-weight: 600;
`;

export default ReserveJoinBox;
