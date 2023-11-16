import React from "react";
import styled from "styled-components";
import { color, flex, font } from "@/styles";
import { BerReserveStudentListProps } from "../interfaces";
import { BerReserveCloseIcon } from "../assets/icons";

const ReserveStudentList = ({
  studentList,
  handleClick,
}: BerReserveStudentListProps) => {
  return (
    <StudentList>
      {studentList.map((student) => (
        <StudentListItem key={student} onClick={() => handleClick(student)}>
          {student}
          <BerReserveCloseIcon />
        </StudentListItem>
      ))}
    </StudentList>
  );
};

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

export default ReserveStudentList;
