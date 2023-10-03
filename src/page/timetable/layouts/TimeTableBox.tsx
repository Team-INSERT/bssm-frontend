import React from "react";
import styled from "styled-components";
import useDate from "@/hooks/useDate";
import { useQueryClient } from "@tanstack/react-query";
import { KEY } from "@/constants";
import { emptyTimetable } from "@/assets/data";
import TimeTableBar from "./TimeTableBar";
import { useTimetableListQuery } from "../services/query.service";
import TimeTableCategory from "./TimeTableCategory";
import TimeTableTable from "./TimeTableTable";

const TimeTableBox = () => {
  const { weekdaysKOR: weekdays, getNowWeekDay, translateDay } = useDate();
  const queryClient = useQueryClient();
  const [selectedDay, setSelectedDay] = React.useState<string>(
    getNowWeekDay({ type: "KOR" }),
  );
  const [timetableType, setTimetableType] = React.useState<"bar" | "table">(
    "bar",
  );

  const [dayTimeTable, setDayTimeTable] = React.useState(emptyTimetable);
  const { data, isSuccess } = useTimetableListQuery({ timetableType });

  React.useEffect(() => {
    if (isSuccess) setDayTimeTable(data);
  }, [isSuccess, data]);

  React.useEffect(() => {
    queryClient.invalidateQueries([KEY.TIMETABLE, timetableType]);
  }, [timetableType, queryClient]);

  return (
    <Container>
      <TimeTableCategory
        weekdays={weekdays}
        checked={selectedDay}
        setChecked={setSelectedDay}
        timetableType={timetableType}
        setTimetableType={setTimetableType}
      />
      {timetableType === "bar" && (
        <TimeTableBar
          weekday={translateDay(selectedDay, { to: "ENG_DETAIL" })}
          dayTimeTable={dayTimeTable}
        />
      )}
      {timetableType === "table" && (
        <TimeTableTable dayTimeTable={dayTimeTable} />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 4vh;
`;

export default TimeTableBox;
