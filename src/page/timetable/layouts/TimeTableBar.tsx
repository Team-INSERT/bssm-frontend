import useDate from "@/hooks/useDate";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import ITimetable from "@/global/types/timetable.type";
import { emptyClass, emptyTimetable } from "../data/emptyTimetable";

interface ITimeTableBarProps {
  weekday: string;
  dayTimeTable: ITimetable;
}

const TimeTableBar = ({ weekday, dayTimeTable }: ITimeTableBarProps) => {
  const { getHMSDate, getDiffDayTime, getDiffNowDayTime } = useDate();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const [nowDate, setNowDate] = React.useState("");
  const [nowClass, setNowClass] = React.useState(emptyClass);

  const 현재시간과동기화 = () => {
    const HMSDate = getHMSDate();
    setNowDate(HMSDate);

    const { startTime, endTime } = nowClass;

    const diffClassDayTime = getDiffDayTime(endTime, startTime);
    const diffNowDayTime = getDiffNowDayTime(startTime);

    const classProgress = (diffNowDayTime / diffClassDayTime) * 240;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = classProgress;
    }
  };

  /*
  isNow 속성을 통해 어떤 수업이 현재인지 받아오는 코드

  React.useEffect(() => {
    const timetable = dayTimeTable[weekday];
    const [nowDateClass] = timetable.filter((item) => item.isNow);
    setNowClass(nowDateClass);
  }, [weekday, dayTimeTable]);

  */

  /* 타이머 */
  React.useEffect(() => {
    setInterval(현재시간과동기화, 1000);
  }, []);

  return (
    <Box>
      <BarBox>
        <BarDate>{nowDate}</BarDate>
        <Bar />
      </BarBox>
      <BarList ref={scrollRef}>
        {dayTimeTable[weekday].map((timetable, index) => (
          <BarItem key={index}>
            <BarItemText>{timetable.className}</BarItemText>
          </BarItem>
        ))}
      </BarList>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  width: 56vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BarList = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  overflow-x: scroll;
  padding: 10px;
  padding: 0 28vw;
  border-radius: 6px;
  position: relative;
  gap: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BarItem = styled.div`
  width: 100px;
  padding: 0 120px;
  border-radius: 6px;
  height: 80px;
  display: flex;
  overflow-x: scroll;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
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
