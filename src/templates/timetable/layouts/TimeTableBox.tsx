import React from "react";
import styled from "styled-components";
import { useQueryClient } from "@tanstack/react-query";
import { KEY } from "@/constants";
import Storage from "@/storage";
import { emptyTimetable } from "@/assets/data";
// import useDate from "@/hooks/useDate";
import { StorageKeyType } from "@/storage/types";
import TimeTableBar from "./TimeTableBar";
import { useTimetableListQuery } from "../services/query.service";
import TimeTableCategory from "./TimeTableCategory";
import TimeTableTable from "./TimeTableTable";

const TimeTableBox = () => {
  // const { weekdaysKOR: weekdays, getNowWeekDay, translateDay } = useDate();
  const queryClient = useQueryClient();
  const [selectedDay, setSelectedDay] = React.useState<string>(
    /* getNowWeekDay({ type: "KOR" }), */ "월",
  );
  const [timetableType, setTimetableType] = React.useState<"bar" | "table">(
    (Storage.getItem("timetable_type" as StorageKeyType) as "bar" | "table") ??
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
      <TimeTableLayoutBox>
        <TimeTableCategory
          weekdays={["일", "월", "화", "수", "목", "금", "토"]}
          checked={selectedDay}
          setChecked={setSelectedDay}
          timetableType={timetableType}
          setTimetableType={setTimetableType}
        />
      </TimeTableLayoutBox>
      {!!(
        /* dayTimeTable[translateDay(selectedDay, { to: "ENG_DETAIL" })] */ 0
      ) && (
        <>
          {timetableType === "bar" && (
            <TimeTableBar
              setSelectedDay={setSelectedDay}
              weekday={
                /* translateDay(selectedDay, { to: "ENG_DETAIL" }) */ "adf"
              }
              dayTimeTable={dayTimeTable}
            />
          )}
          {timetableType === "table" && (
            <TimeTableTable dayTimeTable={dayTimeTable} />
          )}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 4vh;
  width: 56%;
`;

const TimeTableLayoutBox = styled.div`
  margin-right: auto;
`;

export default TimeTableBox;
