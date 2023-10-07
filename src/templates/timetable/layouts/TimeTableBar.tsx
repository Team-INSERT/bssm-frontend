import { color, font } from "@/styles";
import styled from "styled-components";
import { ITimetable } from "@/interfaces";
import useTimetableBar from "@/hooks/useTimetableBar";
import useDate from "@/hooks/useDate";
import React from "react";

interface ITimeTableBarProps {
  weekday: string;
  dayTimeTable: ITimetable;
}

const TimeTableBar = ({ weekday, dayTimeTable }: ITimeTableBarProps) => {
  const {
    scrollRef,
    isScrollBox,
    nowDate,
    handleTimetableBarScroll,
    handleTimetableButtonClick,
  } = useTimetableBar();
  const { getDiffDayTime } = useDate();

  return (
    <Container>
      {isScrollBox && <TimetableButton onClick={handleTimetableButtonClick} />}
      <Box>
        <BarBox>
          <BarDate>{nowDate}</BarDate>
          <Bar />
        </BarBox>
        <BarList onScroll={handleTimetableBarScroll} ref={scrollRef}>
          {dayTimeTable[weekday].map((timetable) => {
            const { startTime, endTime } = timetable;
            const newStartTime = `${startTime.hour}:${startTime.minute}`;
            const newEndTime = `${endTime.hour}:${endTime.minute}`;

            const time = getDiffDayTime(newEndTime, newStartTime) / 23400000;

            return (
              <BarItem key={timetable.period} time={time}>
                <BarItemText>{timetable.subject}</BarItemText>
              </BarItem>
            );
          })}
        </BarList>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  gap: 20px;
`;

const TimetableButton = styled.button`
  width: fit-content;
  padding: 6px 12px;
  background-color: ${color.primary_blue};
  color: ${color.white};
  ${font.btn3};
  border-radius: 4px;

  &:after {
    content: "현재 시간과 동기화";
  }
`;

const Box = styled.div`
  display: flex;
  width: 56vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const BarList = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow-x: scroll;
  padding: 10px 28vw;
  border-radius: 6px;
  position: relative;
  gap: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BarItem = styled.div<{ time: number }>`
  width: 100px;
  padding: ${({ time }) => `0 ${time * 1100}px`};
  border-radius: 6px;
  height: 100px;
  display: flex;
  overflow-x: scroll;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  ${font.p3};
  font-weight: 500;
`;

const BarItemText = styled.span`
  position: absolute;
`;

const BarBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: -30vh;
`;

const Bar = styled.div`
  width: 5px;
  border-radius: 5px;
  background-color: ${color.gray};
  height: 160px;
  z-index: 1;
  pointer-events: none;
`;

const BarDate = styled.span`
  ${font.context};
  z-index: 1;
`;

export default TimeTableBar;
