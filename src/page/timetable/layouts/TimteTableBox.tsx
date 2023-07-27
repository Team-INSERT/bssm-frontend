import Category from "@/components/atoms/Category";
import Select from "@/components/atoms/Select";
import Column from "@/components/Flex/Column";
import Row from "@/components/Flex/Row";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import useDate from "@/hooks/useDate";
import { useQueryClient } from "react-query";
import KEY from "@/global/constants/key.constant";
import TimeTableBar from "./TimeTableBar";
import { useTimetableListQuery } from "../services/queries.service";
import { emptyTimetable } from "../data/emptyTimetable";

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
      <Column gap="16px">
        <Title />
        <Column gap="8px">
          <Label>날짜</Label>
          <Row gap="8px">
            {weekdays.map((weekday) => (
              <Category
                key={weekday}
                id={weekday}
                label={`${weekday}요일`}
                checked={weekday === selectedDay}
                onChange={(e) => setSelectedDay(e.target.id)}
                name="date"
              />
            ))}
          </Row>
        </Column>
        <Column gap="8px">
          <Label>학급</Label>
          <Row gap="6px">
            <Select
              options={["1", "2", "3"]}
              defaultOption={userGrade}
              label="학년"
              handler={setUserGrade}
            />
            <Select
              options={["1", "2", "3", "4"]}
              defaultOption={userClass}
              label="반"
              width="62px"
              handler={setUserClass}
            />
          </Row>
        </Column>
      </Column>
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
  gap: 8vh;
`;

const Title = styled.div`
  ${font.H2};

  &:after {
    content: "시간표";
  }
`;

const Label = styled.span`
  ${font.context};
  padding-left: 4px;
`;

export default TimteTableBox;
