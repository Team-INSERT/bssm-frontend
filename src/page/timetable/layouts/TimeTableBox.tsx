import React from "react";
import styled from "styled-components";
import useDate from "@/hooks/useDate";
import { useQueryClient } from "react-query";
import KEY from "@/global/constants/key.constant";
import IClassLevel from "@/global/types/classLevel.type";
import TimeTableBar from "./TimeTableBar";
import { useTimetableListQuery } from "../services/queries.service";
import TimeTableCategory from "./TimeTableCategory";
import emptyTimetable from "../data/emptyTimetable";
import emptyClassLevel from "../data/emptyClassLevel";

const TimeTableBox = () => {
  const { weekdaysKOR: weekdays, getNowWeekDay, translateDay } = useDate();
  const [selectedDay, setSelectedDay] = React.useState<string>(
    getNowWeekDay({ type: "KOR" }),
  );

  const [classLevel, setClassLevel] =
    React.useState<IClassLevel>(emptyClassLevel);
  const [dayTimeTable, setDayTimeTable] = React.useState(emptyTimetable);

  const queryClient = useQueryClient();
  const { data } = useTimetableListQuery(classLevel);

  React.useEffect(() => {
    queryClient.invalidateQueries(KEY.TIMETABLE);
    if (data) setDayTimeTable(data);
  }, [data, queryClient]);

  return (
    <Container>
      <TimeTableCategory
        weekdays={weekdays}
        checked={selectedDay}
        setChecked={setSelectedDay}
        classLevel={classLevel}
        setClassLevel={setClassLevel}
      />
      <TimeTableBar
        weekday={translateDay(selectedDay, { to: "ENG" })}
        dayTimeTable={dayTimeTable}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 67%;
  justify-content: center;
  gap: 4vh;
`;

export default TimeTableBox;
