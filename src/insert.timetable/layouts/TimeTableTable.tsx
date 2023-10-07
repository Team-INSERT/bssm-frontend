import { Column } from "@/_components/Flex";
import useDate from "@/_hooks/useDate";
import { ITimetable } from "@/_interfaces";
import { color, flex, font } from "@/_styles";
import React from "react";
import styled from "styled-components";

interface ITimeTableTableProps {
  dayTimeTable: ITimetable;
}

const TimeTableTable = ({ dayTimeTable }: ITimeTableTableProps) => {
  const { weekdaysENGDetail: weekdays, translateDay } = useDate();

  return (
    <Container>
      <Column>
        {Array.from({ length: 8 }).map((_, i) => (
          <TableItem color={color.content}>
            <TableHeadText>{i ? `${i}교시` : "교시 \\ 요일"}</TableHeadText>
          </TableItem>
        ))}
      </Column>
      {weekdays.map((weekday) => {
        if (!dayTimeTable[weekday]) return;
        return (
          <TableBox>
            <TableItem color={color.content}>
              <TableHeadText>
                {translateDay(weekday, { to: "KOR" })}요일
              </TableHeadText>
            </TableItem>
            {dayTimeTable[weekday]?.map((timetable) => (
              <TableItem color={color.white}>
                <TableText>{timetable.subject}</TableText>
              </TableItem>
            ))}
          </TableBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  background-color: white;
  border: 1px solid ${color.on_tertiary};
  border-collapse: collapse;
  display: flex;
`;

const TableBox = styled.div`
  width: fit-content;
  ${flex.COLUMN_CENTER};
`;

const TableItem = styled.div<{ color: string }>`
  width: 100%;
  text-align: center;
  border: 1px solid ${color.on_tertiary};
  background-color: ${(props) => props.color};
`;

const TableText = styled.div`
  ${font.p2};
  width: 12vw;
  height: 9vh;
  ${flex.CENTER};
`;

const TableHeadText = styled(TableText)`
  ${font.H6};
`;

export default TimeTableTable;
