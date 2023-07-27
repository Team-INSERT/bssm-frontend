import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import useDate from "@/hooks/useDate";
import { useQueryClient } from "react-query";
import KEY from "@/global/constants/key.constant";
import color from "@/styles/color";
import TimeTableBar from "./TimeTableBar";
import { useTimetableListQuery } from "../services/queries.service";
import { emptyTimetable } from "../data/emptyTimetable";
import TimeTableCategory from "./TimeTableCategory";

const TimteTableBox = () => {
  const { weekdaysKOR: weekdays, getNowWeekDay, translateDay } = useDate();
  const [selectedDay, setSelectedDay] = React.useState<string>(
    getNowWeekDay({ type: "KOR" }),
  );

  const [userGrade, setUserGrade] = React.useState("1");
  const [userClass, setUserClass] = React.useState("1");
  const [dayTimeTable, setDayTimeTable] = React.useState(emptyTimetable);

  const queryClient = useQueryClient();
  const { data, refetch } = useTimetableListQuery({ userGrade, userClass });

  React.useEffect(() => {
    queryClient.invalidateQueries(KEY.TIMETABLE);
    if (data) setDayTimeTable(data);
  }, [data, refetch, userGrade, userClass, queryClient]);

  return (
    <Container>
      <TimeTableCategory
        weekdays={weekdays}
        checked={selectedDay}
        setChecked={setSelectedDay}
        userGrade={userGrade}
        setUserGrade={setUserGrade}
        userClass={userClass}
        setUserClass={setUserClass}
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
  justify-content: center;
  gap: 4vh;
`;

export default TimteTableBox;
